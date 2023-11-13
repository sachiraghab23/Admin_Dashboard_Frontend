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
import { isExpired, decodeToken } from 'react-jwt';

const Home = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log(decodeToken(localStorage.getItem('token')));
    setData(decodeToken(localStorage.getItem('token')));
  }, []);

  return (
    <>
      {token == null && <Login setState={setToken} />}
      {data != null && (
        <div className="app-container">
          {/* For login check */}
          <div className="sidenav-container">
            <Sidenav />
          </div>
          <div className="main-container">
            <div className="header-container">
              <Header state={data} />
            </div>
            <div className="content-container">
              <Routes>
                <Route index path="/" element={<Welcome />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/account" state={data} element={<Account />} />
                <Route path="/product-list" element={<ProductList />} />
                <Route path="/addproduct" element={<AddProduct />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home;
