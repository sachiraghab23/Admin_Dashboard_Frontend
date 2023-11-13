import React, { useState } from 'react'
import { Box, InputLabel } from '@mui/material';
import './../../stylesheets/sidenav styles/General.css';
import './../../stylesheets/dashboard styles/ChartCard.css';

const General = ({ setState, setProductData }) => {
  const handleChange = (e) => {
    setProductData((prevState) => (
      { ...prevState, [e.target.name]: e.target.value }
    ));
  }
  const handleNext = () => {
    setState('2');
  }
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
        <input type='text' className='product-input' placeholder='Product name' name='name' onClick={handleChange} />
        <InputLabel><span style={{ color: "red" }}>*</span>Price</InputLabel>
        <input type='number' className='product-input' placeholder='$ price' name='price' onClick={handleChange} />
        <InputLabel><span style={{ color: "red" }}>*</span>Quantity</InputLabel>
        <input type='number' className='product-input' placeholder='enter number' name='quantity' onClick={handleChange} />
        <InputLabel><span style={{ color: "red" }}>*</span>Category</InputLabel>
        <select name="category" id="category-dropdown" onClick={handleChange}>
          <option value="" selected></option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="furniture">Furniture</option>
          <option value="kitchen">Kitchen</option>
        </select>
        <button className="action-img" onClick={handleNext}>Next</button>
      </Box>
      <div className="chart-container" style={{ width: "50%", height: "395px" }}>
        <h3>Media</h3>
        <input type="file" name="media" className="upload"></input>
      </div>
    </div>
  )
}

export default General
