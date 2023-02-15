
import React from "react";
import { SwiperSlide } from "swiper/react";
import Header from "./Component/header";
import Hero from "./Hero/Hero";
import Slider from "./slider/slider";
import Virtual from "./virtual/virtual";
import Productiteam from "./ProductIteam/Productiteam";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/footer";
const App=()=>{
    return(
        <>
        <Header/>
        <Hero/>
        <Slider/>
        <SwiperSlide/>
        <Virtual/>
        <Productiteam/>
        <Testimonials/>
        <Footer/>
        </>
    );
}



export default App;