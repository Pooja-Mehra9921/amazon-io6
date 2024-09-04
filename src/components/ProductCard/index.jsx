import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Tooltip, Rating, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";  
import { setCartItems, setSelectedProduct } from "../../redux/appReducer/appReducer";
import DefaultImage from "../../assets/images/default.png";
import "./style.css";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleProduct = (product) => {
    dispatch(setSelectedProduct(product)); 
    navigate(`/selected-product`);  
  };

  const handleAddToCart = (product) => (e) => {
    e.stopPropagation(); // Prevent card click event from triggering
    dispatch(setCartItems(product)); 
  };

  const { product } = props;

  return (
    <>
      <Card
        className="main-card-container"
        onClick={() => handleProduct(product)} 
        sx={{ maxWidth: 230, margin: 1 }}
      >
        <Box className="heart-icon-container">
          <FavoriteIcon className="heart-icon" style={{ color: "grey" }} />
        </Box>

        <CardMedia
          className="product-card"
          component="img"
          height="210"
          image={product?.images[0] || DefaultImage} 
          alt="product image"
        />

        <CardContent>
          <Tooltip title={product?.title} arrow placement="top">
            <Typography
              style={{
                fontSize: 14,
                lineHeight: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              gutterBottom
              variant="body1"
              component="div"
            >
              {product?.title}
            </Typography>
          </Tooltip>

          <Typography variant="body2" color="text.secondary">
            <strong>Price:</strong> {product?.price}
          </Typography>

          <Stack spacing={1}>
            <Rating
              style={{ fontSize: 12 }}
              className="product-rating"
              name="half-rating"
              defaultValue={product?.rating}
              precision={0.5}
              readOnly
            />
            <Typography style={{ lineHeight: 1 }} variant="body2" color="text.secondary">
              {product?.rating}
            </Typography>
          </Stack>

          <Box className="btn-container">
            <Button 
              style={{ fontSize: 9 }} 
              variant="outlined" 
              color="primary"
              onClick={handleAddToCart(product)} // Add to cart without navigating
            >
              Save For Later
            </Button>
            <Button 
              style={{ fontSize: 9 }} 
              variant="contained" 
              color="secondary"
              onClick={(e) => e.stopPropagation()} // Prevent navigation on Remove button click
            >
              Remove
            </Button>
          </Box>

          <Button
            style={{ fontSize: 9, marginTop: "10px", backgroundColor: "#faaf00" }}
            variant="contained"
            color="secondary"
            onClick={(e) => e.stopPropagation()} // Prevent navigation on Buy Now button click
          >
            Buy Now
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
