import React, { useState, useEffect } from 'react';


const ButtonUp = () => {
    const [showButton, setShowButton] = useState(false);

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
        <a href='#Home' className={`text-white button-zg-up scroll-button ${showButton ? 'show' : ''}`}>
            <i class="fa-solid fa-chevron-up"></i>
        </a>
    )
}

export default ButtonUp