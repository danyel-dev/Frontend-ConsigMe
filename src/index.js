import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import Home from './Home/Home'
import Login from './Login/Login'
import Register from './Register/Register'
import SacoleiraProducts from './SacoleiraProducts/SacoleiraProducts';
import BagProducts from './bag/BagProducts';
import Sacoleiras from './Sacoleiras/Sacoleiras'
import ProductDetail from './ProductDetail/ProductDetail';
import CreateProfile from './CreateProfile/CreateProfile';
import ProfileDetail from './ProfileDetail/ProfileDetail';
import AddProduct from './AddProduct/AddProduct';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bag/" element={<BagProducts />} />
        <Route path="/sacoleiras" element={<Sacoleiras />} />
        <Route path="/sacoleiras/:id/products/" element={<SacoleiraProducts />} />
        <Route path="/sacoleiras/:id/products/:pk" element={<ProductDetail />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/profileDetail/:id" element={<ProfileDetail />} />
        <Route path="/createProfile" element={<CreateProfile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
