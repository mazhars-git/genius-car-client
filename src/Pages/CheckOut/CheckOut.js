import React, { useContext, useState } from 'react';
import checkOutBg from '../../assets/images/checkout/checkout.png';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';

const CheckOut = () => {
    const [startDate, setStartDate] = useState(new Date());
    const Swal = require('sweetalert2');
    const service = useLoaderData();
    const {title, _id, price, img} = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking ={
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Booking Added Done!',
                    showConfirmButton: false,
                    timer: 1500
                  })
        }});
        form.reset();
    }
    return (
        <>
        <div className="hero mb-5 rounded-md" style={{backgroundImage: `url(${checkOutBg})`}}>
            <div className="hero-overlay bg-opacity-70 rounded-md"></div>
            <div className="hero-content text-neutral-content">
                <div className="my-20">
                    <h1 className="mb-5 text-5xl font-bold">Check Out</h1>
                    <h1 className="mb-5 text-5xl font-bold">Book Service: {title}</h1>
                </div>
            </div>
        </div>

        <div className='p-8 my-5 bg-gray-200'>
           
            <form onSubmit={handleBookService} className="card-body">
                <div className='grid grid-clos-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name"
                        className="input input-bordered input-success w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <ReactDatePicker className="input input-bordered input-success w-full" name='date' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} 
                        className="input input-bordered input-success w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price}
                        className="input input-bordered input-success w-full" />
                    </div>
                </div>                    
               
                <div className="form-control mt-6">
                    <input type='submit' className="btn btn-warning bg-orange-500" value="Order Confirm" />
                </div>
            </form>            
        </div>
        </>
    );
};

export default CheckOut;