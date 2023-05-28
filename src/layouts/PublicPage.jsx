import React, { useState, useEffect } from 'react';

// NAVBAR AND FOOTERT
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// IMPORT VIEWS
import Home from '../views/Home'
import AboutUs from '../views/AboutUs'
import Logistics from '../views/Logistics'
import Products from '../views/Products'
import Services from '../views/Services'
import Contacts from '../views/Contacts'
import ButtonUp from '../components/ButtonUp'
// import Certification from '../views/Certification';

const PublicPage = () => {

    return (
        <>
            <Home />
            <AboutUs />
            {/* <Certification /> */}
            <Logistics />
            <Products />
            <Services />
            <Contacts />
            <Footer />
            <ButtonUp />
        </>
    )
}

export default PublicPage;