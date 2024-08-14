import React from "react";
import Header from "../../components/Header"
import SubHeader from "../../components/Sub-header"
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel"; 
import FooteBasic from "../../components/FooterBasic";   
import {sliders} from "../../data/carouselData.json"

import "./style.css"

const Homepage=()=>{
return(
    <>
    <Header/>
    <SubHeader/>
    <Carousel data={sliders}/>
    <Footer/>
    <FooteBasic/>
    </>
);
};

export default Homepage;