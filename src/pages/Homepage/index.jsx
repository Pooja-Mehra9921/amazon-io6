import React, { useEffect } from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/Sub-header";
import ProductSuggestion from "../../components/ProductSuggestion";
import Banner from "../../components/Banner"; 
import Footer from "../../components/Footer";
import FooteBasic from "../../components/FooterBasic";   
import { API } from "../../configs/api";


import "./style.css"
import axios from "axios";

const Homepage=()=>{

useEffect(()=>{
    fetchProducts();
},[]);

const fetchProducts =async()=>{
    try{
const api = API.PRODUCT_SUGGESTION_API;
const resp = await axios(api);
console.log("response", resp);
    }catch(err){
        console.log("error in progress", err);
        
    }
}

return(
    <>
    <Header/>
    <SubHeader/>
    <Banner/>
    <ProductSuggestion title="Up to 60% off | Kitchen products from local stores nearby" link= "See all offers"
    images={} />
    <ProductSuggestion title="Related to items you've viewed" link= "See more" />
    <ProductSuggestion title="More items to consider" link= "See more" />
    <ProductSuggestion title="Up to 50% off | Best offers on furniture from local stores nearby" link= "See all offers" />
    <ProductSuggestion title="Best Sellers in Clothing & Accessories" link= "" />
    <ProductSuggestion title="Trendy home decor" link= "See all offers" />
    <Footer/>
    <FooteBasic/>
    </>
);
};

export default Homepage;