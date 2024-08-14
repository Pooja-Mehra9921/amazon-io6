import { Box, Button } from "@mui/material";
import React from "react";
import image1 from "../../assets/images/carousel-image1.jpg"
import image2 from "../../assets/images/carousel-image2.jpg"
import image3 from "../../assets/images/carousel-image3.jpg"
import image4 from "../../assets/images/carousel-image4.jpg"
import image5 from "../../assets/images/carousel-image5.jpg"
import image6 from "../../assets/images/carousel-image6.jpg"
import image7 from "../../assets/images/carousel-image7.jpg"
import image8 from "../../assets/images/carousel-image8.jpg"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./style.css"
import { Margin } from "@mui/icons-material";

const Carousel =()=>{


const updatedData = [
    { src: image1, alt: "Carousel Image 1" }, 
    { src: image2, alt: "Carousel Image 2" }, 
    { src: image3, alt: "Carousel Image 3" }, 
    { src: image4, alt: "Carousel Image 4" }, 
    { src: image5, alt: "Carousel Image 5" }, 
    { src: image6, alt: "Carousel Image 6" }, 
    { src: image7, alt: "Carousel Image 7" }, 
    { src: image8, alt: "Carousel Image 8" }, 
                                      
];
    return(
<>
<Box style={{height:"20vh", backgroundColor:"blue", Margin:"15px"}}>hello</Box>
    <Box className="carousel-conatiner">
    <ChevronLeftIcon/>
        {updatedData.map
        ((item, index)=>
        {
            return <img className="carousel-images" style={{width:"100%" , height:"80vh"}} src={item.src} alt={item.alt} key={index}/>
        })
        };
    </Box>
    <ChevronRightIcon/>
    <span>
        {updatedData.map((_, index)=>{
            return <Button key={index} onClick={null}></Button>
        })}
    </span>
    </>
    );
};


export default Carousel;