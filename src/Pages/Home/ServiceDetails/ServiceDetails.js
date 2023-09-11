import React from 'react';
import headerImg from '../../../assets/images/checkout/checkout.png';

const ServiceDetails = () => {
    return (
        <div>
            <div className='py-32 my-5 rounded-md' style={{backgroundImage: `url(${headerImg})`}}>
                <h1 className='text-3xl ml-20 font-semibold align-center text-white'>Service Details</h1>
            </div>
            
        </div>
    );
};

export default ServiceDetails;