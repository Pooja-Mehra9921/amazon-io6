import { Box, Divider } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import AmazonLogo from "../../Assets/Logo/amazon.png";
import "./Header.css";
const HeaderBasic = () => {
  return (
    <Box className="header-container">
      <Box className="header">
        <img
          src={AmazonLogo}
          alt="AmazonLogo"
          style={{
            height: "30px",
            width: "80px",
            margin: "10px 0 0 25px",
          }}
        />
      </Box>
    </Box>
  );
};
export default HeaderBasic;
