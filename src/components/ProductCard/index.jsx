import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea } from '@mui/material';
import DefaultImage from "../../assets/images/default.png"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "./style.css"

const ProductCard =(props)=>{
  const {product}= props;
  return(
    <>
    <Card sx={{ maxWidth: 230, margin:1 }}>
      <CardActionArea>
        <CardMedia
        className="product-card"
          component="img"
          height="210"
          image={product?.images[0] || {DefaultImage}}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{fontSize:14, lineHeight:1}} gutterBottom variant="body1" component="div">{product?.title}
            
          </Typography>
          <Typography variant="body2" color="text.secondary"><strong>Price</strong> {product?.price}</Typography>
          
          <Stack spacing={1}>
      <Rating style={{fontSize:12}} className="product-rating" name="half-rating" defaultValue={product?.rating} precision={0.5} readOnly/>
      <Typography style={{lineHeight:1}} variant="body2" color="text.secondary">
            {product?.rating}</Typography>
    </Stack>
          <Box className="btn-container" >
          <Button 
          style={{fontSize:9}}
              variant="outlined"
              color="primary"
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
  
          
        </CardContent>
      </CardActionArea>
      
    </Card>
    </>
  
);

};

export default ProductCard;