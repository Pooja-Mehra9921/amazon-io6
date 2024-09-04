import React from "react";
import Box from "@mui/material/Box"
import DefaultImage from "../../assets/images/default.png"
import "./style.css"
import { Button, Divider, Rating, Stack, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedProduct } from "../../redux/appReducer/appReducer";

const ProductCardList =({product})=>{
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Correct hook for navigation

  const handleProduct = (product) => {
    console.log("product data--------", product);
    dispatch(setSelectedProduct(product)); // Dispatch the selected product to Redux store
    navigate(`/selected-product`);  // Use the navigate function to route to the selected product page
  };
    return(
        <>
        <Box className="product-list-container"
         onClick={() => handleProduct(product)} // Call handleProduct when card is clicked
        >
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
    <Typography variant="body1" style={{fontSize:"14px"}}>{product?.description}</Typography>
    <Typography style={{color:"green", fontSize:"14px"}}>{product?.warrantyInformation}</Typography>
    <Box style={{display:"flex", color:"red", fontSize:"12px"}}>
    <Typography variant="body1" style={{marginRight:"10px", fontSize:"14px"}}>{product?.availabilityStatus}</Typography>
    <Typography variant="body1" style={{fontSize:"14px"}}>{product?.stock}</Typography>
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
          <Button
            style={{fontSize:9, marginTop:"10px", backgroundColor:"#faaf00"}}
              variant="contained"
              color="secondary"
              
            >
              Buy Now
            </Button>
  
            </Box>
                </Box>
        <Divider/>
        </>
    );
};

export default ProductCardList;