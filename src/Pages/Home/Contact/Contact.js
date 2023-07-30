import React from 'react';
import calender from "../../../assets/icons/001-timetable.png";
import phone from "../../../assets/icons/Group 34.png";
import location from "../../../assets/icons/Group 35.png";

const Contact = () => {
    return (
        <div className='my-10'>
            <div className="bg-black flex justify-around text-white py-24 px-10 rounded-md">
                <div className="flex items-center gap-3">
                    <div className=""><img src={calender} /></div>
                    <div>
                        <p>We are open monday-friday</p>
                        <h1 className="text-2xl font-bold pt-2">7:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className=""><img src={phone} /></div>
                    <div>
                        <p>Have a question?</p>
                        <h1 className="text-2xl font-bold pt-2">+2546 251 2658</h1>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className=""><img src={location} /></div>
                    <div>
                        <p>Need a repair? our address</p>
                        <h1 className='text-2xl font-bold pt-2'>Liza Street, New York</h1>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Contact;