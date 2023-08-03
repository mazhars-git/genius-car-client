import React from 'react';
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

const TeamSliderCard = ({member}) => {
    const {title, designation, img} = member;
    return (
    <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card items-center text-center">
            <h2 className="card-title">{title}</h2>
            <h6>{designation}</h6>
        </div>
        <div className='flex py-2 justify-center gap-2'>
            <a href="#"><BsFacebook /></a>
            <a href="#"><AiFillTwitterCircle /></a>
            <a href="#"><TiSocialLinkedinCircular /></a>
        </div>
    </div>
    );
};

export default TeamSliderCard;