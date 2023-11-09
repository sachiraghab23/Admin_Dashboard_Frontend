import React, { useState } from 'react'
import './../stylesheets/Login.css';
import loginImg from '../assets/login-img.jpg';
import { useNavigate } from 'react-router-dom';
import {
  TextField, Checkbox, Button, FormControlLabel
} from '@mui/material';
import { isExpired, decodedToken } from 'react-jwt'

const Login = ({ setState }) => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData, [name]: value,
    }));
    //print
    console.log(loginData);
  };
  const navigate = useNavigate();
  const login = async () => {
    var response = await axios.post('http://localhost:8080/login', loginData);
    console.log(response);
    var decodedData = decodedToken(response.data);
    console.log(decodedData);
    setState(response.data);
    navigate('/');
  }
  const handleForget = () => {
    console.log("user forgot the password");
  }
  return (
    <div className="login-container">
      <div className="input-container">
        <TextField
          id="standard-basic"
          label="username"
          variant="standard"
          className="input"
          onChange={handleChange}
          name="username"
        />
        <TextField
          id="standard-basic"
          label="password"
          variant="standard"
          className="input"
          onChange={handleChange}
          name='password'
        />
        <p onClick={handleForget} className="manual-link">Forgot password</p>
        <FormControlLabel
          control={<Checkbox />}
          label='Remember me'
        />
        <Button variant="contained" sx={{ width: "220px" }} onClick={login}>Login</Button>
        <p>New user? <span onClick={() => navigate('/register')} className="manual-link">Register now</span></p>
      </div>
      <div className="image-container">
        <img src={loginImg} alt="login-key" />
      </div>
    </div>
  )
}

export default Login;
