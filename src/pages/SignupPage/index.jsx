
import React, { useState } from "react";
import { Box, Chip, IconButton, InputAdornment, Paper, TextField, Tooltip, Typography } from "@mui/material";
import "./style.css"
import { Visibility, VisibilityOffOutlined } from "@mui/icons-material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useNavigate } from "react-router-dom";
import { amber } from "@mui/material/colors";
import FooterBasic from "../../components/FooterBasic";
import Homepage from "../Homepage";

const SignupPage =()=>{


  const navigate = useNavigate();


  const [showPassword, setShowPassword] = React.useState(false);
  const [loginData, setloginData] = useState({email:"", password:""});
  const [isSubmit, setisSubmit] = useState(false)

const handlepassword =()=>{
console.log("password clicked");
setShowPassword(!showPassword);
};

const handleLogin =async()=>{
  try{

  if(!loginData.email.length <6 || !loginData.password.length<7) 
    
    return;
  setisSubmit(true);

  const resp = await axios.post(API.LOGIN_API,{

      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30, // optional, defaults to 60

 });

  console.log("--response", resp);
}
catch(err)
  {
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

const nameErr =  isSubmit && loginData?.name.length <=5;
const emailErr =  isSubmit && loginData?.email.length <=5;
const passErr =  isSubmit && loginData?.password.length <=6;
const rePassErr =  isSubmit && loginData?.password.length <=6;

console.log("login data", loginData);

  return(
    <>
    <Box className="signup-main-container">
      <Paper className="paper-container" elevation={2}>
        <Typography variant="h5" style={{padding:"10px 20px"}}>Create Account</Typography>
        
<Typography variant="body1" style={{marginLeft:"20px", marginTop:"5px", fontSize:"14px"}}><strong>Your Name</strong></Typography>
<TextField style={{width:"90%", margin: "5px 5px -2px 20px"}}
        type="text"
        label="Enter your name "
        size="small"
        margin="normal"
        onChange={handleChange("name")}
        error={nameErr}
        helperText= {nameErr && "please enter your name."}
        />

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

        
<Typography variant="body1" style={{marginLeft:"20px", marginBottom:"-2px", marginTop:"5px", fontSize:"14px"}}><strong>Re-enter Password</strong></Typography>

          <TextField style={{width:"90%", marginLeft:"20px", marginRight:"20px"}}
          
          id="outlined-error-helper-text"
          label="Re-enter Password"
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
          onChange={handleChange("re-enter-password")}
          error={rePassErr}
          helperText= {rePassErr && "please enter valid password."}
        />

<Tooltip title={
  (loginData.email.length <6 && "please enter valid email") || (loginData.password.length <7 && "please enter valid password")
  } >
  <span>
<Chip style={{width:"90%", margin:"10px 20px", background: amber[300], marginTop:"30px"}} 
label="Create your new account  " 
variant="contained" 
onClick={handleLogin} 
disabled={loginData.email.length <6 || loginData.password.length<7}
/> 
</span>
</Tooltip>
      </Paper>
    </Box>

    <FooterBasic/>
    </>
  )
}

export default SignupPage;
