import React from 'react';

const FeatureCard = ({feature}) => {
    const {img, title} = feature;
    return (
    <div className="card hover:bg-orange-600 hover:text-base-100 rounded-lg shadow-xl">
        
        <div className="card-body">
            <figure><img src={img} alt="feature" /></figure>
            <h5 className="text-xs font-bold text-center pt-2">{title}</h5>
        </div>
    </div>
    );
};

export default FeatureCard;