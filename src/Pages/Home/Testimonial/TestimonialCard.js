import React from 'react';
import quoteImg from '../../../../src/assets/icons/quote.svg';

const TestimonialCard = ({person}) => {
    const {name, designation, img} = person;
    return (
    <div className="card bg-base-100 shadow-xl">
       <div className='header-box flex justify-around'>
            <img src={img} alt="Shoes" className="rounded-full" />
            <div>
                <h2>{name}</h2>
                <h6>{designation}</h6>
            </div>
            <img src={quoteImg} alt="quote" />
       </div>
        <div>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
            </p>
        </div>
        <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
    </div>
    );
};

export default TestimonialCard;