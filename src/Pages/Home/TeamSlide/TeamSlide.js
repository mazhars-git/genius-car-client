import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './TeamSlide.css';

// import required modules
import { Navigation } from 'swiper/modules';
import TeamSliderCard from './TeamSliderCard';

const TeamSlide = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [teams, setTeams] = useState([]);

  useEffect(() =>{
    fetch('team.json')
    .then(res => res.json())
    .then(data => setTeams(data))
  },[])
 
    return (
    <div className='sliderBox'>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        
          {
            teams.map(member => 
            <SwiperSlide>
                <TeamSliderCard 
                  key={member._id}
                  member={member}
                  >

                </TeamSliderCard>
            </SwiperSlide>
            
            )
          }
         
      </Swiper>    
    </div>
    );
};

export default TeamSlide;