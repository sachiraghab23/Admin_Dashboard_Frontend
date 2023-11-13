import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Sidenav = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/account">
          <li>Account</li>
        </Link>
        <Link to="/product-list">
          <li>Product list</li>
        </Link>             
        <Link to="/addproduct">
          <li>Add Product</li>
        </Link>
        <button onClick={() => {
          localStorage.removeItem('token');
          navigate('/');
        }}>sign out</button>
      </ul>
    </>
  )
}

export default Sidenav
