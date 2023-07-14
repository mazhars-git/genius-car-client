import React from 'react'
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

function About() {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
            
            <div className="relative w-1/2">
                <img src={person} alt='' className="h-full w-4/5 rounded-lg shadow-2xl" />
                <img src={parts}  alt=''className="absolute w-3/5 right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
            </div>
            
            <div className="w-1/2">
                <p className='text-orange-500 font-bold'>About Us</p>
                <h1 className="my-3 text-4xl font-semibold">
                    We are qualified <br />
                     & of experience <br />
                      in this field
                </h1>
                <p className="">
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
