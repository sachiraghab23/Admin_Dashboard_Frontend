import React from 'react'
import './../stylesheets/Header.css';
import { Badge } from '@mui/material-next';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { isExpired, decodeToken } from 'react-jwt';

const Header = (props) => {
  // useEffect(() => {
  //   var token = localStorage.getItem('token');
  //   setDecodedData(decodeToken(token));
  // }, []);
  return (
    <>
      <header>
        <div className='heading-name'><h2>My heading</h2></div>
        <input type="text" name="search" id="search-input" placeholder='🔍 search' />
        <div className="user-details">
          <div className="notification">
            <Badge color="primary" badgeContent={1}>
              <NotificationsIcon />
            </Badge>
          </div>
          <div className="user-name">{props?.state.Fullname}</div>
          <div className="dp">
            <img src={props?.state.avatar} />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header