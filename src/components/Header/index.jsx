import React from "react";
import Box  from "@mui/material/Box";
import AmazonLogo from "../../assets/images/logo.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Select, Typography} from "@mui/material";
import {Select, MenuItem} from "@mui/material";
import Button from '@mui/material/Button';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import InputBase from '@mui/material/InputBase';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "@mui/material/Link";
import IndiaFlag from "../../assets/images/india-Flag.png"
import "./style.css"


const Header=()=>{
    return(
        <>
      <Box className="header-container">
        <Box className="Logo-conatiner">
        <img className="amazon-logo" src={AmazonLogo} alt="amazon-logo" />
        <Box className="logo-Text-container">
        <Typography variant="body1" className="Address-Text" style={{fontSize:12, marginLeft:24}}>Delivering to Chandigarh 161001</Typography>
        <Typography variant="h6" className="logo-text" style={{fontSize:14, marginTop:-6}}><LocationOnIcon/>Update Location</Typography>

        </Box>
<Box>

</Box>
        </Box>
        <Box className="input-section">
            <Select style={{height:40.5, border:0, backgroundColor: "grey", borderTopLeftRadius:2, borderBottomLeftRadius:2, borderTopRightRadius:0, borderBottomRightRadius:0}}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={1}>Baby</MenuItem>
                <MenuItem value={2}>Beauty</MenuItem>
                <MenuItem value={3}>Mobile</MenuItem>
                <MenuItem value={4}>Cloths</MenuItem>
                <MenuItem value={5}>Fashion</MenuItem>
                <MenuItem value={6}>Alexa</MenuItem>
            </Select>
            <InputBase fullWidth style={{backgroundColor:"white", color:"black"}}
        sx={{p:1, flex: 1, height:39, mt:0.1 , w:200}}
        placeholder ="Search Amazon.in"
      />
            
            <Button variant="contained" className="searchBtn" style={{borderRadius:0, 
                borderTopRightRadius:2, borderBottomRightRadius:2, borderTopLeftRadius:0 }}><SearchSharpIcon/></Button>
        </Box>

        <Box className="Header-options-section">
        <Select className="Header-Dropdown" placeholder="All">
<MenuItem value={0}><img style={{height:12, marginRight:1.5}} src={IndiaFlag} alt="india-flag" />EN</MenuItem>

        </Select>
        <Typography className="Header-signin-text " style={{lineHeight:1}}><Link className="sign-in-text" href="/login"><span style={{fontSize:12}} > Hello, sign in</span><br/>
        Accounts & Lists</Link></Typography>
        <Typography className="Header-signin-text" style={{lineHeight:1}}><span style={{fontSize:12}} >Returns</span><br/>
         & Orders</Typography>
         <Typography className="Header-signin-text cartIcon" style={{lineHeight:1, fontSize:16}}><ShoppingCartIcon/>Cart</Typography>

        </Box>
        </Box>
        </>
    )
};

export default Header;