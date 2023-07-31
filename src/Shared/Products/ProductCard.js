import React from 'react';

const ProductCard = ({product}) => {
    const {image, price, title} = product;
    return (
        <div className="card w-85 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <p>
                    
                </p>
                <h2 className="card-title">{title}</h2>
                <p className='text-red-600 font-bold'>{price}</p>
            </div>
        </div>  
    );
};

export default ProductCard;