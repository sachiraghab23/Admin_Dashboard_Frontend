import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
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
      </ul>
    </>
  )
}

export default Sidenav
