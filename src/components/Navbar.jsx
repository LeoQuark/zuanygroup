import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'

// IMG
import Logo from '../assets/img/logo_zuany_group.png'

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
                        <Link
                            to="Home"
                            spy={true}
                            smooth={true}
                            duration={100}
                            className='text-white fw-bold'
                            activeClass='nav-link btn-zg-nav-active'
                        ><img src={Logo} alt="Logo" width="40" height="40" className="align-text-center text-white fw-bold mx-3" />Zuany Group</Link>
                        {/* <a href='#Home'>
                            <img src={Logo} alt="Logo" width="40" height="40" className="align-text-center text-white fw-bold" />
                        </a>
                        <a href="#Home" className="text-white fw-bold mx-3">Zuany Group</a> */}
                    </div>
                </div>
                <button className="navbar-toggler btn-zg-open-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav gap-2 pt-4 pt-lg-0">
                        <li className="nav-item btn-zg-nav">
                            <Link
                                to="Home"
                                spy={true}
                                smooth={true}
                                duration={100}
                                className='nav-link btn-zg-nav text-center'
                                activeClass='nav-link btn-zg-nav-active'
                            >Home</Link>
                            {/* <a className="nav-link btn-zg-nav text-center" href="#Home">Home</a> */}
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <Link
                                to="AboutUs"
                                spy={true}
                                smooth={true}
                                duration={100}
                                className='nav-link btn-zg-nav text-center'
                                activeClass='nav-link btn-zg-nav-active'
                            >Company</Link>
                            {/* <a className="nav-link text-center" href="#AboutUs">Company</a> */}
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <Link
                                to="Logistics"
                                spy={true}
                                smooth={true}
                                duration={100}
                                className='nav-link btn-zg-nav text-center'
                                activeClass='nav-link btn-zg-nav-active'
                            >Logistics</Link>
                            {/* <a className="nav-link text-center" href="#Logistics">Logistics</a> */}
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <Link
                                to="Products-section"
                                spy={true}
                                smooth={true}
                                duration={100}
                                className='nav-link btn-zg-nav text-center'
                                activeClass='nav-link btn-zg-nav-active'
                            >Products</Link>
                            {/* <a className="nav-link text-center"
                                href='#Products-section'
                            >Products</a> */}
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <Link
                                to="Services"
                                spy={true}
                                smooth={true}
                                duration={100}
                                className='nav-link btn-zg-nav text-center'
                                activeClass='nav-link btn-zg-nav-active'
                            >Services</Link>
                            {/* <a className="nav-link text-center" href="#Services">Services</a> */}
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <Link
                                to="Contacts"
                                spy={true}
                                smooth={true}
                                duration={100}
                                className='nav-link btn-zg-nav text-center'
                                activeClass='nav-link btn-zg-nav-active'
                            >Contacts</Link>
                            {/* <a className="nav-link text-center" href="#Contacts">Contacts</a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar