import React from 'react';
import checkOutBg from '../../assets/images/checkout/checkout.png';

const CheckOut = () => {
    return (
        <div className="hero mb-5 rounded-md" style={{backgroundImage: `url(${checkOutBg})`}}>
            <div className="hero-overlay bg-opacity-60 rounded-md"></div>
            <div className="hero-content text-neutral-content">
                <div className="px-24">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            
        </div>
    );
};

export default CheckOut;