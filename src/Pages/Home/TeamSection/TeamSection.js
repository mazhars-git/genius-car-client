import React from 'react';
import TeamSlide from '../TeamSlide/TeamSlide';

const TeamSection = () => {
    
    return (
        <div className='py-5'>
            <div className='text-center'>
                <p className='text-red-500 font-bold'>Team</p>
                <h1 className='text-4xl font-bold my-3'>Meet Our Team</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or Randomised <br /> Words which don't look even slightly believable. </p>
            </div>

            <div>
                <TeamSlide></TeamSlide>
            </div>
        </div>
    );
};

export default TeamSection;