import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { HashRouter, BrowserRouter } from 'react-router-dom';



import Navbar from './components/Navbar'
import PublicPage from './layouts/PublicPage'
import AllProducts from './views/AllProducts'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
    </>
  )
}

export default App
