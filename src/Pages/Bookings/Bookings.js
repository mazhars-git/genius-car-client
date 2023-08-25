import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data));
    }, [])
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
                        ></BookingRow>)
                    }                   
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Bookings;