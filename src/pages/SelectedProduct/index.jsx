import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import ReactImageMagnify from "react-image-magnify";
import { useParams } from "react-router-dom";
import theme from "../../../theme";
import { getOriginalPriceFromDiscount } from "../../utils/utility";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { setCartItems } from "../../redux/appReducer/appReducer";
import SubHeader from "../../components/Sub-header";

const SelectedProduct = () => {
  const productFromStore = useSelector((store) => store?.app?.selectedProduct);
  const cartItems = useSelector((store) => store.app.cartItems);

  const params = useParams();
  const dispatch = useDispatch();

  const productInCart = cartItems.filter((cart) => cart.id == params.id);

  const [imgToMagnify, setImgToMagnify] = useState(
    productFromStore?.thumbnail || ""
  );
  const [isAddedInCart, setAddedInCart] = useState(productInCart.length > 0);

  /**
   * @description Changing main image on mouse hover
   * @param {String} image
   * @returns
   */
  const handleMainImgChange = (image) => () => {
    setImgToMagnify(image);
  };

  /**
   * @description Adding product to cart list
   * @param {Object} product
   * @returns
   */
  const handleAddToCart = (product) => () => {
    setAddedInCart(true);
    dispatch(setCartItems(product));
  };

  if (!productFromStore) {
    // If the productFromStore is undefined, display a loading message
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box style={{ backgroundColor: theme.palette.background.main }}>
      <Header />
      <SubHeader/>
      <Paper elevation={0} className="selected-product-container">
        <Box className="image-section">
          <Box className="image-magnify-container">
            <Box className="image-suggestions">
              {productFromStore?.images?.length > 0 ? (
                productFromStore.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`product-image-${index}`}
                    className="img-suggestion"
                    onMouseOver={handleMainImgChange(image)}
                  />
                ))
              ) : (
                <Typography>No images available</Typography>
              )}
            </Box>
            <Box className="image-magnify-sec">
              <ReactImageMagnify
                className="thumbnail"
                {...{
                  smallImage: {
                    alt: "Product thumbnail",
                    isFluidWidth: true,
                    src: imgToMagnify,
                  },
                  largeImage: {
                    src: imgToMagnify,
                    width: 1200,
                    height: 1800,
                    className: "large-img",
                  },
                  isHintEnabled: true,
                  enlargedImageContainerDimensions: {
                    width: "100%",
                    height: "100%",
                  },
                }}
              />
            </Box>
          </Box>
          <Box className="btn-container">
            {isAddedInCart ? (
              <Button
                variant="contained"
                className="add-cart-btn"
                startIcon={<ShoppingCartIcon />}
                disabled
              >
                Added in Cart
              </Button>
            ) : (
              <Button
                style={{ fontSize: "12px" }}
                variant="contained"
                className="add-cart-btn"
                startIcon={<ShoppingCartIcon />}
                onClick={handleAddToCart(productFromStore)}
              >
                Add to Cart
              </Button>
            )}

            <Button
              variant="contained"
              className="buy-now-btn"
              startIcon={<FlashOnIcon />}
            >
              Buy Now
            </Button>
          </Box>
        </Box>
        <Box className="detail-section">
          <Typography variant="h5">{productFromStore?.title}</Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            {productFromStore?.description}
          </Typography>

          <Box className="price-section" sx={{ my: 2 }}>
            <Typography variant="h4" className="price">
              &#8377;{productFromStore?.price}
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Typography variant="body1" className="original-price">
                {getOriginalPriceFromDiscount(
                  productFromStore?.price,
                  productFromStore?.discountPercentage
                )}
              </Typography>
              <Typography variant="body1" className="discount">
                {productFromStore?.discountPercentage}% off
              </Typography>
            </Box>
            <Typography
              variant="body1"
              className="shippingInformation"
              sx={{ my: 1 }}
            >
              {productFromStore?.shippingInformation}
            </Typography>
            <Typography variant="body1" className="stock">
              Only {productFromStore?.stock} left
            </Typography>
            <Typography
              variant="body1"
              className="warrantyInformation"
              sx={{ my: 1 }}
            >
              {productFromStore?.warrantyInformation}
            </Typography>
          </Box>
          <Box className="rating-container" sx={{ my: 1 }}>
          <Button
  variant="contained"
  className="rating"
  endIcon={<StarIcon />}
>
  {productFromStore?.rating ? productFromStore.rating.toFixed(1) : "N/A"}
</Button>

<Typography variant="body1" className="raters">
  {Math.round(Math.random() * 1000)} Ratings &{" "}
  {productFromStore?.reviews?.length || 0} Reviews
</Typography>

          </Box>

          <Typography variant="body1" sx={{ my: 1 }}>
            Brand: <strong>{productFromStore?.brand}</strong>
          </Typography>
          <Typography variant="body1" sx={{ my: 1 }}>
            Category: <strong>{productFromStore?.category}</strong>
          </Typography>

          <Typography variant="body1" sx={{ my: 1 }}>
            Return Policy: <strong>{productFromStore?.returnPolicy}</strong>
          </Typography>

          <Box className="specification">
            <Typography variant="body1" sx={{ my: 1, fontWeight: "500" }}>
              Specification:
            </Typography>
            <Box>
              <Typography variant="body2">
                Height:
                <strong>
                  &nbsp;&nbsp;&nbsp;{productFromStore?.dimensions?.height}
                </strong>
              </Typography>
              <Typography variant="body2">
                Width:
                <strong>
                  &nbsp;&nbsp;&nbsp; {productFromStore?.dimensions?.width}
                </strong>
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2">
                Depth:
                <strong>
                  {" "}
                  &nbsp;&nbsp;&nbsp;{productFromStore?.dimensions?.depth}
                </strong>
              </Typography>
              <Typography variant="body2">
                Weight:
                <strong>
                  &nbsp;&nbsp;&nbsp;{productFromStore?.weight * 100}gm
                </strong>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Footer />
    </Box>
  );
};

export default SelectedProduct;
