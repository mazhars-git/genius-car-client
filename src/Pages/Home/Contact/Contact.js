import React from 'react';

const Contact = () => {
    return (
        <div className='my-20 flex justify-center'>
            <div className="stats shadow bg-black text-white py-5 px-10">
                <div className="stat place-items-center">
                    <div className="stat-title text-white">We are open monday-friday</div>
                    <div className="stat-value">7:00 am - 9:00 pm</div>
                </div>
                
                {/* <div className="stat place-items-center">
                    <div className="">Have a question?</div>
                    <div className="stat-value">+2546 251 2658</div>
                </div>
                
                <div className="stat place-items-center">
                    <div className="">Need a repair? our address</div>
                    <div className="text-5xl font-bold">Liza Street, New York</div>
                </div> */}
            </div>
        </div>
        
    );
};

export default Contact;