import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import Home from './Home/Home'
import Login from './Login/Login'
import Register from './Register/Register'
import ListProducts from './Products/ListProducts';
import BagProducts from './bag/BagProducts';

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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
