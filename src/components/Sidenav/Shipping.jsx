import React from 'react'
import { Box, InputLabel } from '@mui/material';

const Shipping = ({ setProductData }) => {
  const handleChange = (e) => {
    setProductData((prevState) => (
      { ...prevState, [e.target.name]: e.target.value }
    ));
  };
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: "300px",
          border: "1px solid #efefef",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <h3>Shipping</h3>
        <InputLabel><span style={{ color: "red" }}>*</span>Width</InputLabel>
        <input type='number' className='product-input' placeholder='width' name='width'></input>
        <InputLabel><span style={{ color: "red" }}>*</span>Height</InputLabel>
        <input type='number' className='product-input' placeholder='height' name="height"></input>
        <InputLabel><span style={{ color: "red" }}>*</span>Weight</InputLabel>
        <input type='number' className='product-input' placeholder='weight' name='weight'></input>
        <InputLabel><span style={{ color: "red" }}>*</span>Shipping fees</InputLabel>
        <input type='number' className='product-input' placeholder='$ ' name='shipping' onClick={handleChange}></input>
      </Box>
    </>
  )
}

export default Shipping
