import React from 'react'
import './../stylesheets/Header.css';
import { Badge } from '@mui/material-next';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  let name = 'Sachin tichkule';
  return (
    <>
      <header>
        <div className='heading-name'><h2>My heading</h2></div>
        <input type="text" name="search" id="search-input" placeholder='🔍 search' />
        <div className="user-details">
          <div className="notification">
          <Badge color="primary" badgeContent={1}>
            <NotificationsIcon/>
            </Badge>
            </div>
          <div className="user-name">{name}</div>
          <div className="dp"></div>
        </div>
      </header>
    </>
  )
}

export default Header