import React, { useState } from "react"
import EditProfile from "./Account/EditProfile";
import ChangePassword from "./Account/ChangePassword";
import { Box, Button, Tab, Tabs, TextField } from "@mui/material";
import { TabList, TabContext, TabPanel } from '@mui/lab';
import './../../stylesheets/sidenav styles/Account.css';

const Account = (props) => {
  const [value, setValue] = useState("1");
  // var [decodedData, setDecodedData] = useState({});
  // useEffect(() => {
  //   localStorage.removeItem('token');
  //   var token = localStorage.getItem('token');
  //   setDecodedData(decodeToken(token));
  // }, []);
  const handleChange = (e, num) => {
    setValue(num);
  };
  return (
    <>
      <Box
        sx={{
          width: "95%",
          margin: '0 auto',
          marginTop: '20px',
          flexGrow: 1,
          bgcolor: 'orange',
          display: 'flex',
          height: 224
        }}
      >
        <TabContext value={value}>
          <TabList
            orientation="vertical"
            variant="scrollable"
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="Edit profile" value="1" />
            <Tab label="Change password" value="2" />
          </TabList>
          <TabPanel value="1" style={{ width: '80%' }}>
            <EditProfile state={props?.state.data} />
          </TabPanel>
          <TabPanel value="2">
            <ChangePassword />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  )
}

export default Account
