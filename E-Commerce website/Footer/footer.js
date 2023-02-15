import React from 'react'
import css from './footer.module.css'
import Logo from '../Image/logooo.png'
//  import {InboxIcon ,PhoneIcon, LocationMarkerIcon, LoginIcon, UsersIcon,LinkIcon} from "@heroicons/react/outline";
import {CiLocationOn, } from  'react-icons/ci'
import {BsTelephone, } from  'react-icons/bs'
import {CgInbox, } from  'react-icons/cg'
import {BiLogIn, } from  'react-icons/bi'
import {HiOutlineUsers} from 'react-icons/hi'
import {BiLink} from 'react-icons/bi'
const footer = () => {
  return (
    <div className={css.cfooterwrapper}>
        <hr/>
        <div className={css.cfooter}>
        <div className={css.logo}>
            <img src={Logo} alt=""></img>
        </div>
        <div className={css.block}>
            <div className={css.detail}>
                <span>Contact us</span>
                <span className={css.pngline}>
                 <CiLocationOn className={css.icon}/>
                  <span>111 north avenue Orland ,FL 32001</span>
                  </span> 

                   <span className={css.pngline}>
                  <BsTelephone className={css.icon}/>
                  <a href="tel:820-920-4300">8209204300</a>
                  </span>  

                  <span className={css.pngline}>
                  <CgInbox className={css.icon}/>
                 <a href="mailto:support@amzon.com">support@amzon.com</a>
                  </span>   
            </div>
        </div>

        <div className={css.block}>
            <div className={css.detail}>
                <span>Account </span>
                <span className={css.pngline}>
                 <BiLogIn className={css.icon}/>
                  <span>Sign In</span>
                  </span> 
                  </div>
                 </div>
                 <div className={css.block}>
                 <div className={css.detail}>
                <span>Company </span>
                <span className={css.pngline}>
                 <HiOutlineUsers className={css.icon}/>
                  <a href='/about'>About us</a>
                  </span> 
                  </div>
                 </div>

                 <div className={css.block}>
                 <div className={css.detail}>
                <span>Resources </span>
                <span className={css.pngline}>
                 <BiLink className={css.icon}/>
                  <span>Safety Privacy and terms</span>
                  </span> 
                  </div>
                 </div>
        </div>
        <div className={css.copyRight}>
          <span>Copyright @2023 by Amazon ,Inc.</span>
          <span>All rights reserved.</span>
        </div>
    </div>
  )
}

export default footer;
// BsTelephone,TbInbox,BiLogIn,HiOutlineUsers,BiLink