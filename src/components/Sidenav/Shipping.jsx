import React from 'react'
import { Box, InputLabel } from '@mui/material';

const Shipping = () => {
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
        <input type='number' className='product-input' placeholder='width'></input>
        <InputLabel><span style={{ color: "red" }}>*</span>Height</InputLabel>
        <input type='number' className='product-input' placeholder='height'></input>
        <InputLabel><span style={{ color: "red" }}>*</span>Weight</InputLabel>
        <input type='number' className='product-input' placeholder='weight'></input>
        <InputLabel><span style={{ color: "red" }}>*</span>Shipping fees</InputLabel>
        <input type='number' className='product-input' placeholder='$ '></input>


        <InputLabel><span style={{ color: "red" }}>*</span>Price</InputLabel>
        <input type='number' className='product-input' placeholder='$ price'></input>
        <InputLabel><span style={{ color: "red" }}>*</span>Product Description</InputLabel>
        <input type='text' className='product-input-desc' placeholder='Describe your product'></input>
        <InputLabel><span style={{ color: "red" }}>*</span>Category</InputLabel>
        <select name="" id="category-dropdown">
          <option value="Electronics">ele</option>
        </select>
      </Box>
    </>
  )
}

export default Shipping
