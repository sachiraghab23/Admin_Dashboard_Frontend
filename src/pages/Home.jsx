import React, { useEffect, useState } from 'react'
import './../stylesheets/Home.css';
import Sidenav from '../components/Sidenav/Sidenav';
import Login from './Login';
import Header from '../components/Header';
import Welcome from './../components/dashboard/Welcome';
import Dashboard from '../components/Sidenav/Dashboard';
import Account from './../components/Sidenav/Account';
import ProductList from './../components/Sidenav/ProductList';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../components/Sidenav/AddProduct';

const Home = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  return (
    <div className="app-container">
      {/* For login check */}
      {token == null && <Login setState={setToken} />}
      <div className="sidenav-container">
        <Sidenav />
      </div>
      <div className="main-container">
        <div className="header-container">
          <Header />
        </div>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home
