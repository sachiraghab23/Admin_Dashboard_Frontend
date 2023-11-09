import React from 'react'
import { Box, InputLabel } from '@mui/material';
import './../../../stylesheets/sidenav styles/EditProfile.css';

const EditProfile = () => {
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
        }}
      >
        <div style={{ display: 'flex' }}>
          <div className="display-picture"></div>
          <div style={{ marginTop: '22px' }}>
            <button className="action-img">Change Avatar</button>
            <button className="action-img uncolored">Remove</button>
          </div>
        </div>
        <div className="form-container">
          <div className="field-container">
            <InputLabel>* Name</InputLabel>
            <input type="text" name="" id="" required/>
          </div>
          <div className="field-container">
            <InputLabel>* Username</InputLabel>
            <input type="text" name="" id="" required/>
          </div>          
          <div className="field-container">
            <InputLabel>* Email</InputLabel>
            <input type="text" name="" id="" required/>
          </div>          
          <div className="field-container">
            <InputLabel>Date of Birth</InputLabel>
            <input type="date" name="" id="" required/>
          </div>          
          <div className="field-container">
            <InputLabel>Phone number</InputLabel>
            <input type="text" name="" id="" maxLength={10}/>
          </div>          
          <div className="field-container">
            <InputLabel>Website</InputLabel>
            <input type="text" name="" id="" />
          </div>          
          <div className="field-container">
            <InputLabel>Address</InputLabel>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>          
          <div className="field-container">
            <InputLabel>City</InputLabel>
            <input type="text" name="" id="" maxLength={10}/>
          </div>          
          <div className="field-container">
            <InputLabel>Postal code</InputLabel>
            <input type="text" name="" id="" maxLength={10}/>
          </div>          
        </div>
        <button className='action-img' style={{marginTop:'20px'}}>Save changes</button>
      </Box>
    </div>
  )
}

export default EditProfile
