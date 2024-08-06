import React from "react";
import Box from "@mui/material/Box"
import Typography from "@mui/material";
import { MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HeaderImage from "../../assets/images/header-image.jpg"
import Link from '@mui/material/Link';
import "./style.css"

const SubHeader =()=>{
    return(
<>

<Box className="Sub-header-container">
<Typography className="menu-options Menu-icon" style={{fontSize:14}}><Link className="Link All" href="/Homepage"><MenuIcon/>All</Link></Typography>
    <Typography className="menu-options" style={{fontSize:14}}>Fresh</Typography>
    <Typography className="menu-options" style={{fontSize:14}}> <Link className="Link" href="/ProductPage">Product</Link></Typography>
    <Typography className="menu-options" style={{fontSize:14}}>Amazon MiniTV</Typography>
    <Typography className="menu-options" style={{fontSize:14}}>Sell</Typography>
    <Typography className="menu-options" style={{fontSize:14}}>Best Sellers</Typography>
    <Typography className="menu-options" style={{fontSize:14}}>Today's Deals</Typography>
    <Typography className="menu-options" style={{fontSize:14}}>Mobiles</Typography>
    <Typography className="menu-options" style={{fontSize:14}}>Prime</Typography>
    <Typography className="menu-options" style={{fontSize:14}}>Customer Services</Typography>
    <Typography className="menu-options"style={{fontSize:14}}>Electorinces</Typography>
    <img className="Sub-header-image" src={HeaderImage} alt="SubheaderImage" />
</Box>
</>
    );
};

export default SubHeader;