import React from 'react';
import TestimonialSlide from './TestimonialSlide';

const Testimonial = () => {
    return (
        <div className='py-8 my-10'>
             <div className='text-center py-3'>
                <p className='text-red-500 font-bold'>Testimonial</p>
                <h1 className='text-4xl font-bold my-3'>What Customer Says</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or Randomised <br /> Words which don't look even slightly believable. </p>
            </div>

            <div>
                <TestimonialSlide></TestimonialSlide>
            </div>
        </div>

        
    );
};

export default Testimonial;