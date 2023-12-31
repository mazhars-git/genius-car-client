import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const Swal = require('sweetalert2');

    const url = `https://genius-car-server-fu0g.onrender.com/bookings?email=${user?.email}`;
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data));
    }, [])

    const handleDelete = id => {
        const proceed = 
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#70e000',
                cancelButtonColor: '#ff0054',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                }
            });

        if(proceed) {
            fetch(`https://genius-car-server-fu0g.onrender.com/bookings/${id}`,{

                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    };

    const handleConfirm = id => {
        fetch(`https://genius-car-server-fu0g.onrender.com/bookings/${id}`, {

            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'}),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                //update state
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }

    return (
        <div>
            <h2 className='text-5xl font-bold py-4'>Your Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                        {/* <label>
                            <input type="checkbox" className="checkbox" />
                        </label> */}
                        </th>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Customer Email</th>
                        <th>Price</th>
                        <th>Result</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        bookings.map(booking => <BookingRow
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        handleConfirm={handleConfirm}
                        ></BookingRow>)
                    }                   
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Bookings;