import React, { useEffect } from 'react'
import { useState } from 'react';
import ServiceCard from './ServiceCard';

function Services() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='pb-8'>
            <div className='my-12 text-center'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h1 className='text-5xl font-semibold'>Our Service Area</h1>
                <p className='w-1/2 m-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}                    
                    ></ServiceCard>)
                }
            </div>
            <div className='card-actions justify-center pt-8'>
                <button className="btn btn-outline btn-warning">More Services</button>
            </div>
        </div>
       
    )
}

export default Services;
