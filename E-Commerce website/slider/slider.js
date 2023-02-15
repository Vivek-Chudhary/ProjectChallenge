import React from 'react'
import './slider.css'

import{Swiper,SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import "swiper/css";
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SliderProduct } from '../data/product';
  
const Slider=()=> {
  return (
    <div className="s-container">
      <Swiper
      modules={[Pagination,Navigation]}
      className="mySwiper"
      loopFillGroupWithBlank={true}
      navigation={true}
      slidesPerView={3}
      spaceBetween={40}
      slidesPerGroup={1}
      loop={true}>

     {SliderProduct.map((slide,i)=>
      <SwiperSlide>

       <div className='left-s'>
        <div className='name'>
          <span>{slide.name}</span>
          <span>{slide.detail}</span>
        </div>
        <span>{slide.price}$</span>
        <div>shop now</div>
       </div>
       <img src={slide.img}  height={140} width={130} alt="product" className='img-p'></img>
      </SwiperSlide>
     
     )}    
      </Swiper>
    </div>
  );
};

 export default Slider;



 
