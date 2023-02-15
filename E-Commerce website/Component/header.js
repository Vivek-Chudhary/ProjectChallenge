import React, { useState } from 'react'
import css from './Header.module.css'
import Logo from '../Image/logooo.png'
import {CgShoppingCart} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'
const Header = () => {

  const [showmenu, setshowmenu]=useState(true);

  const toggleMenu=()=>{
    setshowmenu((showmenu)=>!showmenu)
  }
  return (
  <div className={css.container}>
    <div className={css.logo}>
      <img src={Logo} alt=""/>
    </div>
    <div className={css.right}>

      <div className={css.bars}  onClick={toggleMenu}>
        <GoThreeBars/>
      </div>
       
          <ul className={css.menu}style={{display:showmenu? 'inherit':'none'}}>
            <li>Collections</li>
            <li>Brands</li>
            <li>News</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        
        <input type ="text" placeholder='Search..' className={css.search}/>
        <CgShoppingCart className={css.cart}/>
        
    </div>
  </div>
  );
}

export default Header;