import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Tooltip } from '@mui/material';
import DefaultImage from "../../assets/images/default.png"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./style.css"

const ProductCard =(props)=>{

  const handleProduct =(product)=>()=>{
console.log("prodct data--------", product);


  }

  const {product}= props;
  return(
    <>
    <Card className="main-card-container" onClick={handleProduct(product)} sx={{ maxWidth: 230, margin:1 }} >

    
        <Box className="heart-icon-container">
        <FavoriteIcon className="heart-icon" style={{color:"grey"}}/>
        </Box>
        
        <CardMedia
        className="product-card"
          component="img"
          height="210"
          image={product?.images[0] || {DefaultImage}}
          alt="green iguana"
        />
        <CardContent>
          <Tooltip title={product?.title} arrow placement="top">
          <Typography style={{fontSize:14, lineHeight:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}} 
          gutterBottom variant="body1" component="div">{product?.title}
            
            </Typography>
          </Tooltip>
          
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
          <Button
            style={{fontSize:9, marginTop:"10px", backgroundColor:"#faaf00"}}
              variant="contained"
              color="secondary"
              
            >
              Buy Now
            </Button>
          
        </CardContent>
      
      
    </Card>
    </>
  
);

};

export default ProductCard;