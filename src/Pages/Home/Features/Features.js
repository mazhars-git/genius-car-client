import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
    const [features, setFeatures] = useState({});
    useEffect(() => {
        fetch('features.json')
        .then( res => res.json())
        .then( data => setFeatures(data))
    }, [])
    return (
        <div className='py-10 my-10'>
            <div className='text-center py-3'>
                <p className='text-red-500 font-bold'>Our Features</p>
                <h1 className='text-4xl font-bold my-3'>Why Choose Us</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or Randomised <br /> Words which don't look even slightly believable. </p>
            </div>

            <div className='grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 pt-3'>
                {
                    features.map(feature => 
                    <FeatureCard
                    key={feature._id}
                    feature={feature}
                    ></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Features;