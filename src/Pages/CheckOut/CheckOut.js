import React from 'react';
import checkOutBg from '../../assets/images/checkout/checkout.png';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const service = useLoaderData();
    const {title, _id} = service;
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
           
            <form className="card-body">
                <div className='grid grid-clos-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <input type="text" placeholder="First Name" 
                        className="input input-bordered input-success w-full" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Last Name" 
                        className="input input-bordered input-success w-full" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Your Phone" 
                        className="input input-bordered input-success w-full" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Your Email"  
                        className="input input-bordered input-success w-full" />
                    </div>
                </div>                    
                <div className="form-control">
                    <textarea className="textarea textarea-primary" placeholder="Your Message"></textarea>
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