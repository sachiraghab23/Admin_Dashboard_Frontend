import React, { useState } from 'react'
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import General from './General';
import Shipping from './Shipping';
// import './../../stylesheets/sidenav styles/AddProduct.css';

const AddProduct = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, num) => {
    setValue(num);
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
      </TabContext>
      <TabPanel value="1"><General /></TabPanel>
      <TabPanel value="3"><Shipping /></TabPanel>
    </div>
  )
}

export default AddProduct