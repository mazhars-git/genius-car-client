import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';

const TestimonialSlide = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [persons, setPersons] = useState([]);

  useEffect(() =>{
    fetch('testimonial.json')
    .then(res => res.json())
    .then(data => setPersons(data))
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
            persons.map(person => 
            <SwiperSlide>
                <TestimonialCard 
                  key={person._id}
                  person={person}
                  >

                </TestimonialCard>
            </SwiperSlide>
            
            )
          }
         
      </Swiper>    
    </div>
    );
};

export default TestimonialSlide;