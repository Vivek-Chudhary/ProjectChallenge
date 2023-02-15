import React from 'react'
import css from './Testimonials.module.css'
import hero from '../Image/girlsss.png'
import {TestimonialsData} from '../Datas/testimonial';

import { Swiper, SwiperSlide} from 'swiper/react';

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
          <div className={css.container}>
          <span>Top Rated</span>
          <span>Seedily say has suitable disposal and boy.
          </span>
          </div>
            
        <img src={hero} alt=''></img>
        <div className={css.container}>
          <span>100k</span>
          
          <span>Happy Customers with us</span>
        </div>
        </div>
        <div className={css.reviews}>Reviews</div>
        <div className={css.carousel}>
          <Swiper
          slidesPerGroup={1}
          slidesPerView={3}
          spaceBetween={20}
          className={css.tCarousel}
          
          
          >
            {
              TestimonialsData.map((testimonial,i)=>(
                <SwiperSlide>
                  <div className={css.testimonial}>
                    <span>{testimonial.Comment}</span>
                    <hr></hr>
                    <span>{testimonial.Name}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
    </div>
  )
}

export default Testimonials;