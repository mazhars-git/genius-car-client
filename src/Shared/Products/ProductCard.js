import React from 'react';
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({product}) => {
    const {image, price, title} = product;
    return (
        <div className="card w-85 shadow-md">
            <figure className="p-8 m-5 bg-slate-100">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center ">
                <div className='flex text-orange-500'>
                    <AiFillStar /> 
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2 className="card-title">{title}</h2>
                <p className='text-red-500 font-bold'>{price}</p>
            </div>
        </div>  
    );
};

export default ProductCard;