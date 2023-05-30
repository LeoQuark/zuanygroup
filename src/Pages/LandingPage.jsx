import React from 'react';

import Navbar from '../components/Navbar'

// IMPORT VIEWS
import Home from '../components/Sections/Home'
import AboutUs from '../components/Sections/AboutUs'
import Logistics from '../components/Sections/Logistics'
import Products from '../components/Sections/Products'
import Services from '../components/Sections/Services'
import Contacts from '../components/Sections/Contacts'
import ButtonUp from '../components/ButtonUp'
import Footer from '../components/Footer'

const LandingPage = () => {

    return (
        <>
            <Navbar />
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

export default LandingPage