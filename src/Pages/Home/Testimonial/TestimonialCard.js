import React from 'react';
import quote from '../../../../src/assets/icons/review/quote 1.png';
import parson1 from '../../../../src/assets/icons/review/Ellipse 2.png';

const TestimonialCard = ({person}) => {
    const {name, designation} = person;
    return (
    <div className="card bg-base-100 shadow-xl p-4">
       <div className='header-box flex justify-around'>
            <div>
                <img src={parson1} alt="Shoes" className="rounded-full" />
            </div>
            <div>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <h6>{designation}</h6>
            </div>
            <div>
                <img src={quote} alt="quote" />
            </div>
       </div>
        <div className='py-3'>
            <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
            </p>
        </div>
        <div className="rating justify-center">
            <input name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
    </div>
    );
};

export default TestimonialCard;