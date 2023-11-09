import { Box, FilledInput, FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material';
import React, { useState } from 'react'
import './../../../stylesheets/sidenav styles/EditProfile.css';

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: "80vh",
          border: "1px solid #efefef",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "10px",
        }}>
        <div className="form-container">
          <div className="field-container">
            <InputLabel><span style={{ color: 'red' }}>*</span> Current Password</InputLabel>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>}
              />
            </FormControl>
          </div>
          <div className="field-container">
            <InputLabel><span style={{ color: 'red' }}>*</span> New Password</InputLabel>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>}
              />
            </FormControl>
          </div>
          <div className="field-container">
            <InputLabel><span style={{ color: 'red' }}>*</span> Confirm Password</InputLabel>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>}
              />
            </FormControl>
          </div>
        </div>
        <button className='action-img' style={{ marginTop: '20px' }}>Change Password</button>
      </Box >
    </div >
  )
}

export default ChangePassword
