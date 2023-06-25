import React, { useState } from 'react';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { HashRouter, BrowserRouter } from 'react-router-dom';

import UserState from './context/users/UserState'

import LandingPage from './Pages/LandingPage'
import ProductPage from './Pages/ProductPage'

import Auth from './Pages/Auth'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'

function App() {

  const location = useLocation()
  // console.log(location)


  return (
    <UserState>
      <Routes>
        {/* RUTAS PUBLICAS */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/all-products' element={<ProductPage />} />
        {/* RUTAS PRIVADAS */}
        <Route
          path='/admin'
          element={
            <Login />
          }
        />
        <Route
          path='/admin/dashboard'
          element={
            <Dashboard />
          }
        />
        {/* <Route path='*' element={<h1>NOT FOUND</h1>} /> */}
      </Routes>
    </UserState>
  )
}

export default App