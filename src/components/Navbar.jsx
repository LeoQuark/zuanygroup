import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingUp = prevScrollPos > currentScrollPos;

            setIsNavbarVisible(isScrollingUp);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className={`navbar navbar-expand-lg bg-zg-blue py-3 fixed-top ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
            <div className="container">
                <div className="d-flex">
                    <div className="navbar-brand" href="#">
                        <a href='#Home'>
                            <img src="/img/logo_zuany_group.png" alt="Logo" width="40" height="40" className="align-text-center text-white fw-bold" />
                        </a>
                        <a href="#Home" className="text-white fw-bold mx-3">Zuany Group</a>
                    </div>
                </div>
                <button className="navbar-toggler btn-zg-open-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav gap-2 pt-4 pt-lg-0">
                        <li className="nav-item btn-zg-nav">
                            <a className="nav-link btn-zg-nav text-center" href="#Home">Home</a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a className="nav-link text-center" href="#AboutUs">Company</a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a className="nav-link text-center" href="#Logistics">Logistics</a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a className="nav-link text-center"
                                href='#Products-section'
                            >Products</a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a className="nav-link text-center" href="#Services">Services</a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a className="nav-link text-center" href="#Contacts">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar