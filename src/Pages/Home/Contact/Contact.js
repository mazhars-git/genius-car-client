import React from 'react';
import { LuCalendarClock } from "react-icons/lu";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <div className='my-20'>
            <div className="bg-black flex justify-around text-white py-5 px-10 rounded-md">
                <div className="flex items-center gap-3">
                    <div className="text-3xl"><LuCalendarClock /></div>
                    <div>
                        <p>We are open monday-friday</p>
                        <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-3xl"><BiSolidPhoneCall /></div>
                    <div>
                        <p>Have a question?</p>
                        <h1 className="text-2xl font-bold">+2546 251 2658</h1>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-3xl"><IoLocationOutline /></div>
                    <div>
                        <p>Need a repair? our address</p>
                        <h1 className='text-2xl font-bold'>Liza Street, New York</h1>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Contact;