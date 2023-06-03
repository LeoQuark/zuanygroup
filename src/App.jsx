import React, { useState } from 'react';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { HashRouter, BrowserRouter } from 'react-router-dom';

import LandingPage from './Pages/LandingPage'
import ProductPage from './Pages/ProductPage'

import Auth from './Pages/Auth'
import Admin from './Pages/Admin'

function App() {

  const location = useLocation()
  console.log(location)


  return (
    <Routes>
      {/* RUTAS PUBLICAS */}
      <Route path='/' element={<LandingPage />} />
      <Route path='/all-products' element={<ProductPage />} />
      {/* RUTAS PRIVADAS */}
      <Route
        path='/admin'
        element={
          // <Auth>
          //   <Admin />
          // </Auth>
          <Admin />
        }
      />
      {/* <Route path='*' element={<h1>NOT FOUND</h1>} /> */}
    </Routes>
  )
}

export default App