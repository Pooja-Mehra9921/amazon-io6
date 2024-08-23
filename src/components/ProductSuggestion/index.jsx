import React from "react";
import Box from "@mui/material/Box";
import axios from "axios"
import "./style.css"
import { Link, Typography } from "@mui/material";
import dummy from "../../assets/images/default.png"
import API from "../../configs/api"

const ProductSuggestion =({title="", link="", filteredProducts={dummy}})=>{


const fetchapi = async()=>{
    try{
const API = API.PRODUCT_SUGGESTION_API;
const resp = await axios(API);
console.log("response", resp)
    }
    catch(err){
        console.log("error in progress", err);
    }
};

fetchapi();

    return (
<>

<Box className="suggestion-container">
<Box className="card-container">
<Box className="text-container">
    <Typography variant="body1" style={{fontSize:"20px"}}><strong>{title}</strong></Typography>
    <Typography ><Link href="/#" variant="body1" style={{fontSize:"14px", paddingTop:"20px", paddingLeft:"15px", textDecoration:"none"}}>{link}</Link></Typography>
</Box>
<Box className="sugg-card">
        <Box className="cart1">
            <img style={{height:"135px", width:"135px"}} src={dummy} alt="dummy image" />
        </Box>
    </Box>
</Box>
</Box>


</>
    );
};


export default ProductSuggestion;