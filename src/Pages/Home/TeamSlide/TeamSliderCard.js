import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import fbIcon from '../../../assets/icons/social/fb.png';
import twitIcon from '../../../assets/icons/social/twitter.png';
import linkIcon from '../../../assets/icons/social/linkedin.png';
import inIcon from '../../../assets/icons/social/insta.png';

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
            <a href="#"><img src={fbIcon} alt="" /></a>
            <a href="#"><img src={twitIcon} alt="" /></a>
            <a href="#"><img src={linkIcon} alt="" /></a>
            <a href="#"><img src={inIcon} alt="" /></a>
        </div>
    </div>
    );
};

export default TeamSliderCard;