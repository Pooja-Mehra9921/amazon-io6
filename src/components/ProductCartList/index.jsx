import React from "react";
import Box from "@mui/material/Box"
import DefaultImage from "../../assets/images/default.png"
import "./style.css"
import { Button, Divider, Rating, Stack, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCardList =({product})=>{
    return(
        <>
        <Box className="product-list-container">
            <Box className="image-section">
            <Box className="heart-icon-container">
        <FavoriteIcon className="heart-icon" style={{color:"grey"}}/>
        </Box>
                <img className="product-image" src={product?.thumbnail} alt={product?.title} /></Box>
            <Box className="detail-section">
                <Typography variant="h5">
                {product?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary"><strong>Price</strong> {product?.price}</Typography>
          
          <Stack spacing={1}>
      <Rating style={{fontSize:12}} className="product-rating" name="half-rating" defaultValue={product?.rating} precision={0.5} readOnly/>
      <Typography style={{lineHeight:1}} variant="body2" color="text.secondary">
            {product?.rating}</Typography>
    </Stack>
    <Typography variant="body1">{product?.description}</Typography>
    <Typography style={{color:"blue"}}>{product?.warrantyInformation}</Typography>
    <Box style={{display:"flex", color:"red", fontSize:"12px"}}>
    <Typography style={{marginRight:"10px"}}>{product?.availabilityStatus}</Typography>
    <Typography>{product?.stock}</Typography>
    </Box>
    
          <Box className="list-btn-container" >
          <Button
          style={{fontSize:9}}
          variant="contained"
          color="secondary"
              //   onClick={handleAddToCart(product)}
            >
              Save For Later
            </Button>

            <Button
            style={{fontSize:9}}
              variant="contained"
              color="secondary"
              
            >
              Remove
            </Button>

          </Box>
  
            </Box>
                </Box>
        <Divider/>
        </>
    );
};

export default ProductCardList;