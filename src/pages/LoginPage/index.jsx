import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import  IconButton from "@mui/material/IconButton"
import  InputAdornment from "@mui/material/InputAdornment"
import  TextField from "@mui/material/TextField"
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { amber } from "@mui/material/colors";
import AmazonLogo from "../../assets/images/amazon.png"
import { useNavigate } from "react-router-dom";
import { Visibility,  VisibilityOffOutlined } from "@mui/icons-material";
import { Chip, Tooltip } from "@mui/material";
import {API} from "../../configs/api"
import Tooltip from "@mui/material/Tooltip";
import FooterBasic from "../../components/FooterBasic";
import Loader from "../../components/Loader";
import "./style.css";


const LoginPage = () => {
  const navigate = useNavigate();

  const HandleYourCreateAccount = () => {
    // console.log("handleyourcreat");
    navigate("/signup");
  };


  const [showPassword, setShowPassword] = React.useState(false);
  const [loginData, setloginData] = useState({email:"", password:""});
  const [isSubmit, setisSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);

const handlepassword =()=>{
console.log("password clicked");
setShowPassword(!showPassword);
};

const handleLogin =async()=>{
  try{
    setLoading(true);
  if(!loginData.email.length <6 || !loginData.password.length<7) return;
  setisSubmit(true);

  const {status, data} = await axios.post(API.LOGIN_API,{

      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30 // optional, defaults to 60

 });

  console.log("--response", data);
  if(status==200){
    setLoading(false);
    localStorage.setItem("userData", data);
    navigate("/homepage");
  }
}
catch(err)
  {
    setLoading(false);

console.log("---error in login process", err);
}
};


const handleChange = (type) => (event) =>{
  // setisSubmit(false);
console.log("type", type);
  // if(type=="email"){
  //   setloginData({...loginData, email: event.target.value})
  // }
  // else if(type=="password"){
  //   setloginData({...loginData, password: event.target.value})

  // }
  setloginData({...loginData, [type]: event.target.value})

}
const emailErr =  isSubmit && loginData?.email.length <=5;
const passErr =  isSubmit && loginData?.password.length <=6;

console.log("login data", loginData);







  return (
    <>
    <Loader isLoading={isLoading}/>
    <Grid container className="main-conatiner" spacing={2}>
      <Grid style={{ display:"flex", alignItem:"center", justifyContent:"center"}} xs={6} md={8}>
          
          <Box style={{ width:"420px"}}>
          <Box style={{width:"420px"}} className="logo">
            <img src={AmazonLogo} alt="AmazonLogo" height={40} width={"120"} />
          </Box>
            <Box>
              <Paper elevation={2} sx={{ height: "440px", width: "420px" }}>
                <Typography sx={{ paddingLeft: "20px", paddingTop:"20px" }} variant="body1" style={{fontSize:"20px"}}>
                 
                  Sign in or create account
                </Typography>


                <Typography variant="body1" style={{marginLeft:"20px", marginBottom:"-12px", marginTop:"20px", fontSize:"14px"}}><strong>Enter Email</strong></Typography>
                <TextField style={{width:"90%", marginLeft:"20px", marginRight:"20px"}}
                 
                 id="outlined-error-helper-text"
                  label="Email"
                 variant="outlined"
                  size="small"
                 margin="normal"
                 InputProps={{
                 endAdornment: (
               <InputAdornment position="start">
               <EmailOutlinedIcon  style={{color: emailErr ? "red" : "grey" }}/>
               </InputAdornment>
               ),
                }}
onChange={handleChange("email")}
                error={emailErr}
                helperText= {emailErr && "please enter valid email."}
              />

<Typography variant="body1" style={{marginLeft:"20px", marginBottom:"-2px", marginTop:"5px", fontSize:"14px"}}><strong>Enter Password</strong></Typography>

          <TextField style={{width:"90%", marginLeft:"20px", marginRight:"20px"}}
          
          id="outlined-error-helper-text"
          label="Password"
          type={showPassword ? "text" :  "password"}
        
          variant="outlined"
          fullWidth
          size="small"
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={handlepassword}>
                  {showPassword
                    ?
                    <Visibility style={{color: passErr ? "red" : "grey" }}/>
                    : 
                     <VisibilityOffOutlined style={{color: passErr ? "red" : "grey" }} />
                  }
                </IconButton>
           
              </InputAdornment>
            ),
          }}
          onChange={handleChange("password")}
          error={passErr}
          helperText= {passErr && "please enter valid password."}
        />

<Tooltip title={
  (loginData.email.length <6 && "please enter valid email") || (loginData.password.length <7 && "please enter valid password")
  } >
  <span>
<Chip style={{width:"90%", margin:"10px 20px", background: amber[300]}} 
label="Continue" 
variant="contained" 
onClick={handleLogin} 
disabled={loginData.email.length <6 || loginData.password.length<7}
/> 
</span>
</Tooltip>



                <Typography style={{ lineHeight:"10px"}}  component="span" sx={{ margin: "0 0 0 20px", fontSize:"14px", textAlign:"justify" }}>
                  By continuing, you agree to Amazon's{" "}
                  <Link href="#" variant="condition">conditions of
                  Use
                  </Link>
                  <Typography component="span"> and </Typography>
                  <Link href="#" variant="privacy" style={{paddingLeft:"20px"}}>
                    {"Privacy Notice."}
                  </Link>

                </Typography>
        
                <Typography
                  component="span"
                  sx={{ display: "flex", margin: "auto" }}
                >
                  <ArrowRightIcon style={{paddingLeft:"10px", marginTop:"10px", fontSize:"20px"}} />
                  <Link href="#" variant="Need help" style={{marginTop:"10px", fontSize:"14px"}}>
                    {"Need help?"}
                  </Link>
                </Typography>
                <Divider sx={{ margin: "15px 0 0 20px", width: "380px" }} />
               <Typography style={{marginLeft:"20px", marginTop:"10px"}} variant="body1"><strong>Buying for work?</strong></Typography>
                <Box className="shop-link">
                  <Link href="#" variant="privacy">
                    {"Shop on Amazon Business"}
                  </Link>
                </Box>
                {/* </DemoPaper>
            </Stack> */}
              </Paper>
            </Box>
            <Divider
              sx={{ fontSize: "15px", width: "420px", marginTop:"10px", marginBottom:"10px"}}
            >
              New to Amazon?
            </Divider>
            <Button
              variant="text"
              sx={{
                margin: "auto",
                width: "420px",
                background: "none",
                // background: amber[400],
                color: "black",
                // backgroundColor: theme.palette.amber.main,
                border: "1px solid rgb(211,211,211)",
              }}
              onClick={HandleYourCreateAccount}
            >
              Create your Amazon Account
            </Button>
          </Box>
        
      </Grid>
    </Grid>
    
    <FooterBasic/>
    </>
  );
};
export default LoginPage;