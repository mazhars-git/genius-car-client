import React from 'react'

function ServiceCard({service}) {
    const {img, price, title} = service;
    return (
        <div className="card w-85 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price :$ {price}</p>
                <div className="card-actions justify-center">
                    <div className="btn btn-primary">Buy Now</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
