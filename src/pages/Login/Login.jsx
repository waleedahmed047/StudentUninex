import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography
} from "@mui/material";
import './Login.css'
import Logo from '../../assets/login/logo.svg'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const handelCreateAccount = () => {
    navigate('/dashboard');
  }

  return (
    <div className='main-login' >
      <div className='login-inner-section' >
        <div className='login-inner-section-main'>
          <div className='login-inner-section-stack'>
            <img src={Logo} />
            <h1>SingUp</h1>
            <p>Let’s start your wonderful journey with Uninex</p>
            <Typography className="heading">Education Information</Typography>
            <div className="input-fields-section">
              <p>Highest Qualification</p>
              <TextField className="custom-textfield" size="small" label="Qualification" variant="outlined" fullWidth />

            </div>
            <div className="input-fields-section">
              <p>Major/Field of Study</p>
              <TextField className="custom-textfield" size="small" label="Major/Field" variant="outlined" fullWidth />
            </div>
            <Typography className="heading">Education Information</Typography>
            <div className="input-fields-section">
              <p>Preferred Job Role</p>
              <TextField className="custom-textfield" size="small" label="Qualification" variant="outlined" fullWidth />

            </div>
            <div className="input-fields-section">
              <p>Location preference (City/Region)</p>
              <TextField className="custom-textfield" size="small" label="Location" variant="outlined" fullWidth />
            </div>

            <Button fullWidth className="next-button" onClick={handelCreateAccount}>Create Account</Button>

            <Typography className="footer-text">
              Already have an account? <span className="login-text">Log in</span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
