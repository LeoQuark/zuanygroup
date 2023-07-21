import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import LanguageContext from '../context/language/LanguageContext.js';

// IMG
import Logo from '../assets/img/logo_zuany_group.png'
import ES from '../assets/img/es.png'
import EN from '../assets/img/en.png'


const Navbar = ({ translation }) => {

    const { lang, changeEn, changeEs } = useContext(LanguageContext)

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [upPage, setUpPage] = useState(window.pageYOffset);
    const [widthPage, setWidthPage] = useState(window.innerWidth)

    const handleLanguage = () => lang.language == 'en' ? changeEs() : changeEn()

    const handleWidthPage = () => setWidthPage(window.innerWidth)

    // console.log('sasa', window.innerWidth)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const currentWidth = window.innerWidth
            const isScrollingUp = prevScrollPos > currentScrollPos;

            // ssetWidthPage(currentWidth)
            setUpPage(isScrollingUp)
            setIsNavbarVisible(isScrollingUp);
            setPrevScrollPos(currentScrollPos);
        };

        // console.log(widthPage)

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);



    useEffect(() => {
        // Agregar un listener para que se actualice el ancho al cambiar el tamaño de la ventana
        window.addEventListener('resize', handleWidthPage);
        // Eliminar el listener cuando el componente se desmonte para evitar problemas de memoria
        return () => {
            window.removeEventListener('resize', handleWidthPage);
        };
    }, []); //

    useEffect(() => {
        console.log('Ancho de la ventana/pantalla:', widthPage);
    }, [widthPage]); // El useEffect se ejecutará cada vez que windowWidth cambie


    return (
        <nav className={`navbar navbar-expand-lg bg-zg-blue py-3 navbar-zg fixed-top ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
            <div className="container-fluid">
                <div className={`d-flex justify-content-between ${widthPage <= 390 ? 'w-0' : 'w-75'}`}>
                    <div className="navbar-brand" href="#">
                        <a href="/zg#Home" className='text-white fw-bold'>
                            <img src={Logo} alt="Logo" width="40" height="40" className="align-text-center text-white fw-bold mx-3" />
                            Zuany Group
                        </a>
                    </div>
                    <button
                        className='btn'
                        onClick={handleLanguage}
                    >
                        <p className='m-0 text-white'>
                            {lang.language}
                            {lang.language == 'es' ?
                                <img src={ES} className='mx-2 img-language' /> :
                                <img src={EN} className='mx-2 img-language' />}
                        </p>
                    </button>
                </div>

                <button className="navbar-toggler btn-zg-open-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">
                    <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end mx-0 mx-lg-5" id="navbarNavDropdown">

                    <ul className="navbar-nav gap-2 pt-4 pt-lg-0">
                        <li className="nav-item btn-zg-nav">
                            <a href="/zg#Home" className='nav-link btn-zg-nav text-center'>
                                {translation.buttons.home}
                            </a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a href="/zg#AboutUs" className='nav-link btn-zg-nav text-center'>
                                {translation.buttons.company}
                            </a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a href="/zg#Logistics" className='nav-link btn-zg-nav text-center'>
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
                            <a href="/zg#Services" className='nav-link btn-zg-nav text-center'>
                                {translation.buttons.services}
                            </a>
                        </li>
                        <li className="nav-item btn-zg-nav">
                            <a href="/zg#Contacts" className='nav-link btn-zg-nav text-center'>
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