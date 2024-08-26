import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import SubHeader from "../../components/Sub-header";
import Footer from "../../components/Footer";
import axios from "axios";
import "./style.css";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon  from '@mui/icons-material/ViewModule';
import Loader from "../../components/Loader";
import ProductCardList from "../../components/ProductCartList";

const ProductPage = (props) => {
  const [pData, setPdata] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [listType, setlistType ] = useState("grid");

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

  const changeView =(type)=> ()=>{
if(type == "grid"){
  setlistType("grid");
}
else{
  setlistType("list");
}
  };

  return (
    <>
    {isLoading && <Loader isLoading={isLoading} />}
      <Header />
      <SubHeader />
      <Box className="toggle-button-container">
        <Box className="toggle-container">
        <ToggleButtonGroup  style={{marginRight:"10px"}}
      orientation="horizontel"
      exclusive
    >
      <ToggleButton onClick={changeView("grid")} value="module" aria-label="module" style={{height:"30px", width:"30px",marginLeft:"2px", border:"none"}}>
        <ViewModuleIcon  />
      </ToggleButton>
<ToggleButton onClick={changeView("list")} value="list" aria-label="list" varient="outlined" style={{height:"30px", width:"30px", marginLeft:"2px", border:"none"}}>
        <ViewListIcon />
      </ToggleButton>
    </ToggleButtonGroup>
        </Box>        
      </Box>

{listType == "grid" && (
  <Box className="product-main-container">
      <Box className="product-section">
        {pData.map((product, index) => (
          <ProductCard 
            key={index} 
            product={product}
          />
        ))}
      </Box>
      </Box>
)}
{
  listType == "list" && (
    <Box>
      {pData.map((product, index)=>{
return(
  <ProductCardList key={index} product={product}/>

)
      })}
    </Box>
  )
}
      
      <Footer />
    </>
  );
};

export default ProductPage;
