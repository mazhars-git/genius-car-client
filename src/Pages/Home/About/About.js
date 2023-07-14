import React from 'react'

function About() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
            
            <div className='w-1/2'>
                <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            </div>
            
            <div className='w-1/2'>
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
                <button className="btn btn-primary">Get Started</button>
            </div>
            </div>
        </div>
    )
}

export default About;
