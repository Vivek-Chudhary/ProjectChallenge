import React from 'react'
import css from './virtual.module.css'
import ReactCompareImage from "react-compare-image"; 
import Before from '../Image/girl1.jpg'
import After from '../Image/girl2.jpg'


const virtual = () => {
  return (
    <div className={css.Virtual}> 
      <div className={css.left}>
        <span>Virtual Tyr-On</span>
        <span>Never Buy the wrong Shade Again!</span>
        <span>Try Now!</span>
        
      </div>
      <div className={css.right}>
      <div className={css.wrapper}>
      <ReactCompareImage leftImage={Before} rightImage={After}/>
      </div>
       
      </div>

    </div>
  )
}

export default virtual;