import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

// IMG
import Logo from '../assets/img/logo_zuany_group.png'

const Navbar = () => {

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [upPage, setUpPage] = useState(window.pageYOffset);

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
                <div className="d-flex">
                    <div className="navbar-brand" href="#">
                        <a href="/#Home" className='text-white fw-bold'>
                            <img src={Logo} alt="Logo" width="40" height="40" className="align-text-center text-white fw-bold mx-3" />
                            Zuany Group
                        </a>
                    </div>
                </div>
                <button className="navbar-toggler btn-zg-open-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">
                    <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end mx-0 mx-lg-5" id="navbarNavDropdown">
                    <ul className="navbar-nav gap-2 pt-4 pt-lg-0">
                        <li className="nav-item btn-zg-nav">
                            <a href="/#Home" className='nav-link btn-zg-nav text-center'>
                                Home
                            </a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a href="/#AboutUs" className='nav-link btn-zg-nav text-center'>
                                Company
                            </a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a href="/#Logistics" className='nav-link btn-zg-nav text-center'>
                                Logistics
                            </a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <Link
                                to="/all-products"
                                className='nav-link btn-zg-nav text-center'
                            >Products</Link>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a href="/#Services" className='nav-link btn-zg-nav text-center'>
                                Services
                            </a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a href="/#Contacts" className='nav-link btn-zg-nav text-center'>
                                Contacts
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar