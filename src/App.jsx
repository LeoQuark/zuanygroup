import React, { useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { HashRouter, BrowserRouter } from 'react-router-dom';

import LandingPage from './Pages/LandingPage'
import ProductPage from './Pages/ProductPage'

import Auth from './Pages/Auth'
import Admin from './Pages/Admin'

function App() {

  return (
    <Routes>
      {/* RUTAS PUBLICAS */}
      <Route path='/' element={<LandingPage />} />
      <Route path='/all-products' element={<ProductPage />} />
      {/* RUTAS PRIVADAS */}
      <Route
        path='/admin/*'
        element={
          <Auth>
            <Admin />
          </Auth>
        }
      />
      {/* <Route path='*' element={<h1>NOT FOUND</h1>} /> */}
    </Routes>
  )
}

export default App