import React from 'react'
import css from './Hero.module.css'
import Heroo from '../Image/Beautygirl.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

const Hero=()=> {
  return (
    <div className={css.container}>



      {/*left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>Seedily say has subital disposal and boy. Exercise joy man children</span>
        </div>
      </div>
      


      {/* middle side*/}
      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
       <div className={css.loggo}><img src={Heroo}  alt=""  width={440} /></div> 
        <div className={css.cart2}>
        <RiShoppingBagFill/>
        <div className={css.signup}>
          <span>Best Signup offers</span>
          <div>
            <BsArrowRight/>
          </div>
        </div>
        </div>
      </div>

      {/* right side */}

     <div className={css.h_sides}>
      <div className={css.traffic}>
        <span>100k</span>
        <span>Monthly Traffic</span>
      </div>
      <div className={css.customers}>
        <span>1.2m</span>
        <span>Happy Customer</span>
      </div>

     </div>
    </div>
  )
}

export default Hero;