import React, { useState } from 'react'
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import General from './General';
import Shipping from './Shipping';
import axios from 'axios';
import './../../stylesheets/sidenav styles/AddProduct.css';

const AddProduct = () => {
  const [value, setValue] = useState(0);
  const [productData, setProductData] = useState({});
  const handleChange = (e, num) => {
    setValue(num);
  }
  const addProductAPI = async () => {
    const resp = await axios.post('http://localhost:8080/addproduct', productData);
  }
  return (
    <div className='productlist-container'>
      <h2>Add product</h2>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='basic tabs example'>
            <Tab label="General" value='1' />
            <Tab label="Shipping" value='2' />
          </TabList>
        </Box>
        <TabPanel value="1"><General setState={{ setValue, setProductData }} /></TabPanel>
        <TabPanel value="2"><Shipping setState={{ setProductData }} /></TabPanel>
      </TabContext>
      <button className="action-img" onClick={addProductAPI}>Add product</button>
    </div>

  )
}

export default AddProduct