import React, { useState, useCallback } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"; 
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import Logo from "../../assets/login/logo.svg";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="main-login">
      <div className="singup-inner-section">
        <div className="login-inner-section-main">
          <div className="login-inner-section-stack">
            <img src={Logo} alt="Company Logo" />
            <h1>Sign Up</h1>
            <p>Let’s start your wonderful journey with Uninex</p>
            <Typography className="heading">Basic Information</Typography>

            <TextField
              className="custom-textfield"
              size="small"
              label="Full Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              className="custom-textfield"
              size="small"
              label="Phone Number"
              variant="outlined"
              fullWidth
            />

            <TextField
              className="custom-textfield"
              size="small"
              label="Email"
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button className="send-code-button">Send Code</Button>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              className="custom-textfield"
              size="small"
              label="Verification Code"
              variant="outlined"
              fullWidth
            />

            <TextField
              className="custom-textfield"
              size="small"
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title={showPassword ? "Hide Password" : "Show Password"}>
                      <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />

            <Button fullWidth className="next-button" onClick={handleLogin}>
              Next
            </Button>

            <Typography className="footer-text">
              Already have an account? <span className="login-text">Log in</span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
