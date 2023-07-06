import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import LanguageContext from '../context/language/LanguageContext.js';

// IMG
import Logo from '../assets/img/logo_zuany_group.png'

const Navbar = ({ translation }) => {

    const { lang, changeEn, changeEs } = useContext(LanguageContext)

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [upPage, setUpPage] = useState(window.pageYOffset);
    // console.log('navbar lang', lang.language)


    const handleLanguage = () => lang.language == 'en' ? changeEs() : changeEn()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingUp = prevScrollPos > currentScrollPos;

            // console.log(currentScrollPos, isScrollingUp)
            setUpPage(isScrollingUp)
            setIsNavbarVisible(isScrollingUp);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className={`navbar navbar-expand-lg bg-zg-blue py-3 navbar-zg fixed-top ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
            <div className="container-fluid">
                <div className="d-flex justify-content-between w-75">
                    <div className="navbar-brand" href="#">
                        <a href="/#Home" className='text-white fw-bold'>
                            <img src={Logo} alt="Logo" width="40" height="40" className="align-text-center text-white fw-bold mx-3" />
                            Zuany Group
                        </a>
                    </div>
                    <button
                        className='btn btn-light'
                        onClick={handleLanguage}
                    >
                        <p className='m-0'>
                            {lang.language}
                            <i className="fa-solid fa-language fa-lg"></i>
                        </p>
                    </button>
                </div>
                <button className="navbar-toggler btn-zg-open-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">
                    <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end mx-0 mx-lg-5" id="navbarNavDropdown">

                    <ul className="navbar-nav gap-2 pt-4 pt-lg-0">
                        <li className="nav-item btn-zg-nav">
                            <a href="/#Home" className='nav-link btn-zg-nav text-center'>
                                {translation.buttons.home}
                            </a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a href="/#AboutUs" className='nav-link btn-zg-nav text-center'>
                                {translation.buttons.company}
                            </a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a href="/#Logistics" className='nav-link btn-zg-nav text-center'>
                                {translation.buttons.logistics}
                            </a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <Link
                                to="/all-products"
                                className='nav-link btn-zg-nav text-center'
                            >
                                {translation.buttons.products}
                            </Link>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a href="/#Services" className='nav-link btn-zg-nav text-center'>
                                {translation.buttons.services}
                            </a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a href="/#Contacts" className='nav-link btn-zg-nav text-center'>
                                {translation.buttons.contacts1}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar