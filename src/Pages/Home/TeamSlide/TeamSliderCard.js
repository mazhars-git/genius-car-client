import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

const TeamSliderCard = ({member}) => {
    const {title, designation, img} = member;
    return (
    <div className="card bg-base-100 shadow-xl">
        <figure className="px-6 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card items-center text-center">
            <h2 className="card-title font-bold text-2xl pt-3">{title}</h2>
            <h6 className='pb-3'>{designation}</h6>
        </div>
        <div className='flex pb-4 justify-center gap-2'>
            <a href="#"><BsFacebook /></a>
            <a href="#"><AiFillTwitterCircle /></a>
            <a href="#"><TiSocialLinkedinCircular /></a>
            <a href="#"><BsInstagram /></a>
        </div>
    </div>
    );
};

export default TeamSliderCard;