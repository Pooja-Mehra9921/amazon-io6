import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import SubHeader from "../../components/Sub-header";
import Footer from "../../components/Footer";
import axios from "axios";
import "./style.css";
import { Box } from "@mui/material";
import Loader from "../../components/Loader";

const ProductPage = (props) => {
  const [pData, setPdata] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [listType, setListType] = useState("grid");

  const fetchProductdata = async () => {
    try {
      setLoading(true);
      const api = `https://dummyjson.com/products?limit=200`;
      const response = await axios.get(api);
      console.log("--response", response);
      const { status, data } = response || {};
      if (status === 200) {
        setPdata(data.products); // Update this line to access the products array
        setLoading(false);
      }
    } catch (err) {
      console.error("--error while fetching list of countries", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductdata();
  }, []);

  console.log("--pData", pData);

  return (
    <>
    {isLoading && <Loader isLoading={isLoading} />}
      <Header />
      <SubHeader />
      <Box className="product-section">
        {pData.map((product, index) => (
          <ProductCard 
            key={index} 
            product={product}
          />
        ))}
      </Box>
      <Footer />
    </>
  );
};

export default ProductPage;
