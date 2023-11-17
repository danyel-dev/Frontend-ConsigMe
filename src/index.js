import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import Home from './Home/Home'
import Login from './Login/Login'
import Register from './Register/Register'
import ListProducts from './Products/ListProducts';
import BagProducts from './bag/BagProducts';
import Sacoleiras from './Sacoleiras/Sacoleiras'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ListProducts />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bag" element={<BagProducts />} />
        <Route path="/sacoleiras" element={<Sacoleiras />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
