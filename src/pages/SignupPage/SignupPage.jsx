import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
// import "./SignupPage.css";
// import theme from "../../../theme";
const SignupPage = () => {
  const [show, setShow] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [name, setName] = useState("");
  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [password, setPassword] = useState("");
  const ShowText = (e) => {
    setPassword(e.target.value);
    console.log("ShowText", ShowText);
    console.log("e", e.target.value);
  };

  const handleCheckBox = () => {
    console.log("handleCheckBox");
    setShow(() => !show);
  };

  const handleName = (e) => {
    setName(e.target.value);
    console.log("e", e.target.value);
  };

  const handleContinue = () => {
    if (name.length > 0) {
      setErrorShow(false);
    } else {
      setErrorShow(true);
    }
    if (emailOrNumber.length > 0) {
      setErrorShow(false);
    } else {
      setErrorShow(true);
    }
    if (password.length > 0) {
      setErrorShow(false);
    } else {
      setErrorShow(true);
    }
  };
  const handleNumberOrEmail = (e) => {
    setEmailOrNumber(e.target.value);
    console.log("e", e.target.value);
  };
  console.log("emailOrNumber", emailOrNumber);
  console.log("inputTypajdgsjhdgse", show);
  console.log("name", name, name.length);
  return (
    <Box>
      <Box sx={{ margin: "70px 0 0 600px" }}>
        <Typography variant="h5" sx={{ margin: "-30px 0 0 0" }}>
          Welcome
        </Typography>
        <Paper elevation={2} sx={{ height: "480px", width: "320px" }}>
          <Typography
            variant="h1"
            sx={{ fontSize: "15px", margin: "0px 0 10px 20px" }}
          >
            <input type="radio" style={{ margin: "10px 0 0 0" }} /> Create
            account New to Amazon?
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "14px", margin: "0px 0 0px 20px" }}
          >
            First and Last Name
          </Typography>
          {errorShow ? (
            <Typography
              color="red"
              sx={{ fontSize: "10px", margin: "0px 0 0 20px" }}
            >
              Please enter the first and last name
            </Typography>
          ) : (
            ""
          )}
          <TextField
            type="text"
            size="small"
            value={name}
            sx={{ margin: "0px 0 10px 20px", width: "80%" }}
            onChange={handleName}
          />

          <Typography
            variant="h6"
            sx={{ fontSize: "14px", margin: "0px 0 0 20px" }}
          >
            Mobile no or Email number
          </Typography>
          {errorShow ? (
            <Typography
              color="red"
              sx={{ fontSize: "10px", margin: "0px 0 0 20px" }}
            >
              Pleace enter the mobile number or email number
            </Typography>
          ) : (
            ""
          )}
          <TextField
            type="text"
            size="small"
            sx={{ margin: "0px 0 10px 20px", width: "80%" }}
            onChange={handleNumberOrEmail}
          />
          <Typography
            variant="h6"
            sx={{ fontSize: "14px", margin: "0px 0 0px 20px" }}
          >
            Create a Password
            {errorShow ? (
              <Typography
                color="red"
                sx={{ fontSize: "10px", margin: "0px 0 0 0px" }}
              >
                Please enter the Password
              </Typography>
            ) : (
              ""
            )}
          </Typography>

          <TextField
            id="outlined-password-input"
            // label="Password"
            type={show ? "text" : "password"}
            autoComplete="current-password"
            size="small"
            sx={{ margin: "0px 0 10px 20px", width: "80%" }}
            onclick={ShowText}
          />
          <Box>
            <input
              type="checkbox"
              onClick={handleCheckBox}
              style={{ margin: "0px 0 10px 20px" }}
            />
            <Typography variant="p" sx={{ margin: "0 0 0 5px" }}>
              Show Password
            </Typography>
          </Box>
          <Button
            sx={{
              margin: "0px 0 10px 20px",
              width: "260px",
              backgroundColor: "rgb(255,202,40)",
            }}
            onClick={handleContinue}
          >
            Continue
          </Button>
          <Box>
            <Typography
              component="span"
              sx={{ margin: "0px 0 0 20px", fontSize: "14px" }}
            >
              By continuing, you agree to Amazon's{" "}
              <Link
                href="#"
                variant="condition"
                sx={{ margin: "0px 0 0 20px" }}
              >
                {"conditions of use"}
              </Link>
              <Typography component="span" sx={{ fontSize: "14px" }}>
                {" "}
                and{" "}
              </Typography>
              <Link href="#" variant="privacy" sx={{ fontSize: "14px" }}>
                {"Privacy Notice."}
              </Link>
            </Typography>
          </Box>
          <Divider sx={{ margin: "10px 0 0 0px" }} />
          <Box sx={{ margin: "10px 0 0 20px" }}>Buying for work?</Box>
          <Box className="shop-link">
            <Link href="#" underline="none" sx={{ margin: "0px 0 10px 20px" }}>
              {"Create a free business account"}
            </Link>
          </Box>
          <Box
            sx={{
              height: "45px",
              width: "100%",
              // border: "1px solid black",
              margin: "10px 0 0 0",
              borderRadius: "2px",
              backgroundColor: "rgb(243,243,243)",
            }}
          >
            <Typography variant="p" sx={{ margin: "20px 0 0 0" }}>
              <input type="radio" style={{ margin: "10px 0 0 20px" }} />
              Sign in Already a customer?
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
export default SignupPage;
