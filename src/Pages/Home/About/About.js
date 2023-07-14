import React from 'react'
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

function About() {
    return (
        <div className="hero min-h-screen bg-base-200 pb-12">
            <div className="hero-content flex-col lg:flex-row">
            
            <div className="relative w-1/2">
                <img src={person} alt='' className="h-full w-4/5 rounded-lg shadow-2xl" />
                <img src={parts}  alt=''className="absolute right-5 top-3/4 w-3/5 max-w-sm rounded-lg shadow-2xl" />
            </div>
            
            <div className="w-1/2">
                <h6 className='text-orange-500 font-bold'>About Us</h6>
                <h1 className="text-4xl font-bold">
                    We are qualified <br />
                     & of experience <br />
                      in this field
                </h1>
                <p className="py-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                <br></br>
                    The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <button className="btn btn-warning">Get More Info</button>
            </div>
            </div>
        </div>
    )
}

export default About;
