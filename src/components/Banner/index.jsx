import React from "react";
import { Carousel } from 'react-responsive-carousel';  // Correct import
import 'react-responsive-carousel/lib/styles/carousel.min.css';  // CSS for Carousel

import Banner_Image1 from "../../assets/images/carousel-image1.jpg";
import Banner_Image2 from "../../assets/images/carousel-image2.jpg";
import Banner_Image3 from "../../assets/images/carousel-image3.jpg";
import Banner_Image4 from "../../assets/images/carousel-image4.jpg";
import Banner_Image5 from "../../assets/images/carousel-image5.jpg";
import Banner_Image6 from "../../assets/images/carousel-image6.jpg";
import Banner_Image7 from "../../assets/images/carousel-image7.jpg";

import { Box, Typography } from "@mui/material";
import "./style.css";

const Banner = () => {
  return (
    <Box className="banner-container">
      <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
        <div>
          <img className="banner-images" src={Banner_Image1} alt="Carousel Image 1" />
        </div>
        <div>
          <img className="banner-images" src={Banner_Image2} alt="Carousel Image 2" />
        </div>
        <div>
          <img className="banner-images" src={Banner_Image3} alt="Carousel Image 3" />
          
        </div>
        <div>
          <img className="banner-images" src={Banner_Image4} alt="Carousel Image 4" />
          
        </div>
        <div>
          <img className="banner-images" src={Banner_Image5} alt="Carousel Image 5" />
        
        </div>
        <div>
          <img className="banner-images" src={Banner_Image6} alt="Carousel Image 6" />
        
        </div>
        <div>
          <img className="banner-images" src={Banner_Image7} alt="Carousel Image 7" />
          
        </div>
      </Carousel>
    </Box>
  );
};

export default Banner;
