import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'

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

            // console.log(window.pageYOffset, window.pageYOffset || document.documentElement.scrollTop)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Link
            to="Home"
            spy={true}
            smooth={true}
            duration={100}
            className={`text-white button-zg-up scroll-button ${showButton ? 'show' : ''}`}
        ><i class="fa-solid fa-chevron-up"></i></Link>
    )
}

export default ButtonUp