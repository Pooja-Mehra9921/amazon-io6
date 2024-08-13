import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import "./style.css"
const Footer=()=>{
    return(
        <>
        <Box className="footer-main-container">
<Box className="Items-container">
    <Typography variant="h5" style={{color:"white"}}>
      Get to know Us</Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links"  href="#" underline="hover">About Us</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links" href="#" underline="hover">Careers</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links" href="#" underline="hover">Press Releases</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link  className="footer-links" href="#" underline="hover">Amazon Science</Link></Typography>
</Box>
<Box className="Items-container">
    <Typography variant="h5" style={{color:"white"}}>
      Connect with Us</Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links"  href="#" underline="hover">Facebook</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links" href="#" underline="hover">Twitter</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links" href="#" underline="hover">Instagram</Link></Typography>
    
</Box>
<Box className="Items-container">
    <Typography variant="h5" style={{color:"white"}}>
      Make Money with Us</Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links"  href="#" underline="hover">Sell on Amazon</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links" href="#" underline="hover">Sell under Amazon Accelerator</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links" href="#" underline="hover">Protect and Build Your Brand</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link  className="footer-links" href="#" underline="hover">Amazon Global Selling</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link  className="footer-links" href="#" underline="hover">Become an Affiliate</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link  className="footer-links" href="#" underline="hover">Fulfilment by Amazon</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link  className="footer-links" href="#" underline="hover">Advertise Your Project</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link  className="footer-links" href="#" underline="hover">Amazon Pay on Merchants</Link></Typography>
</Box>
<Box className="Items-container">
    <Typography variant="h5" style={{color:"white"}}>
      Get to know Us</Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links"  href="#" underline="hover">COVID-1.59 and Amazon</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links" href="#" underline="hover">Your Account</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links" href="#" underline="hover">Returns Centre</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link  className="footer-links" href="#" underline="hover">Recalls and Product Safety Alerts</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links" href="#" underline="hover">1.500% Purchase Protection</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links" href="#" underline="hover">Amazon App Download</Link></Typography>
    <Typography variant="h6" style={{lineHeight:1.5}}><Link className="footer-links" href="#" underline="hover">Help</Link></Typography>

</Box>
        </Box>
    

        </>
    );
};


export default Footer;