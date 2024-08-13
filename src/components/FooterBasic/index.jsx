import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./style.css";
const FooterBasic = () => {
  return (
<>
    <Box className="basic-main-container">
      <Box className="items-container">
        <Box className="menu-container">
       <Link variant="body1" className="footer-menu" href="/#">Conditions of Use</Link>
       <Link variant="body1" className="footer-menu" href="/#">Police Notice</Link>
       <Link variant="body1" className="footer-menu" href="/#">Help</Link>

        </Box>

<Box style={{ display:"flex", alignItems:"center", justifyContent:"center", fontSize:"12px"}}>
  <Typography className="footer-menu" variant="body1">
  © 1996-2024, Amazon.com, Inc. or its affiliates
  </Typography>
</Box>
      </Box>


    </Box>
    
      </>
  );
};
export default FooterBasic;