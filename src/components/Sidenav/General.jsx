import React from 'react'
import { Box, InputLabel } from '@mui/material';
import './../../stylesheets/sidenav styles/General.css';
import './../../stylesheets/dashboard styles/ChartCard.css';

const General = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Box
        sx={{
          width: '50%',
          height: "100%",
          border: "1px solid #efefef",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <h3>Basic Info</h3>
        <InputLabel><span style={{ color: "red" }}>*</span>Product Name</InputLabel>
        <input type='text' className='product-input' placeholder='Product name'></input>
        <InputLabel><span style={{ color: "red" }}>*</span>Price</InputLabel>
        <input type='number' className='product-input' placeholder='$ price'></input>
        <InputLabel><span style={{ color: "red" }}>*</span>Product Description</InputLabel>
        <input type='text' className='product-input-desc' placeholder='Describe your product'></input>
        <InputLabel><span style={{ color: "red" }}>*</span>Category</InputLabel>
        <select name="" id="category-dropdown">
          <option value="Electronics">ele</option>
          <option value="Electronics">ele</option>
          <option value="Electronics">ele</option>
          <option value="Electronics">ele</option>
        </select>
      </Box>
      <div className="chart-container" style={{ width: "50%", height: "395px" }}>
        <h3>Media</h3>
        <input type="file" name="" className="upload"></input>
      </div>
    </div>
  )
}

export default General
