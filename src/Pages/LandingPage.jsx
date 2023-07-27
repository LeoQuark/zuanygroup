import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import LanguageContext from '../context/language/LanguageContext.js';

// TRANSLATION
import enTranslation from '../utils/en.json'
import esTranslation from '../utils/es.json'

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

    const { lang } = useContext(LanguageContext)
    const { hash } = useLocation()

    // console.log('langgg', lang.language)

    const translation = lang.language === 'es' ? enTranslation : esTranslation


    useEffect(() => {
        if (hash) {
            // Remover el símbolo '#' del ID
            const id = hash.substring(1);

            // Realizar el scrolling automático al elemento con el ID correspondiente
            const targetElement = document.getElementById(id);

            if (targetElement) {

                // controlar la duración del scroll
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                }, 250);
            }
        } else {
            // Si no hay hash en la URL, hacer scroll al inicio de la página
            window.scrollTo(0, 0);
        }
    }, [location])

    return (
        <>
            <Navbar translation={translation} />
            <Home translation={translation} />
            <AboutUs translation={translation} />
            <Logistics translation={translation} />
            <Products translation={translation} />
            <Services translation={translation} />
            <Contacts translation={translation} />
            <Footer translation={translation} />
            <ButtonUp to='#Home' />
        </>
    )
}

export default LandingPage