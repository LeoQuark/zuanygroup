import React, { useState, useEffect } from 'react';

const ButtonUp = () => {
    const [showButton, setShowButton] = useState(false);
    // const [prevPageY, setPrevPageY] = useState(window.pageYOffset || document.documentElement.scrollTop)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPosition > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <a
            href="#Home"
            className={`button-zg-up text-white scroll-button ${showButton ? 'show' : ''}`}
        >
            <i className="fa-solid fa-chevron-up"></i>
        </a>
    )
}

export default ButtonUp

{/* <Link
            to="Home"
            spy={true}
            smooth={true}
            duration={100}
            className={`button-zg-up text-white scroll-button ${showButton ? 'show' : ''}`}
        ><i class="fa-solid fa-chevron-up"></i></Link> */}