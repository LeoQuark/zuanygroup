import React, { useState, useEffect } from 'react';

const ButtonUp = ({ to, icon }) => {
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
        <>
            {
                icon == "wsp" ? (
                    <a
                        href={to}
                        className={`button-wsp-up text-white scroll-button ${showButton ? 'show' : ''}`}
                        style={{ bottom: "8rem", background: "#25D366" }}
                    >
                        <i className="fa-brands fa-whatsapp fa-lg"></i>
                    </a >
                ) : (
                    <a
                        href={to}
                        className={`button-zg-up button-zg-up text-white scroll-button ${showButton ? 'show' : ''}`}
                        style={{ bottom: "2rem" }}
                    ><i className="fa-solid fa-chevron-up"></i>
                    </a>
                )
            }
        </>
    )

    // return (
    //     <a
    //         // href="#Home"
    //         href={to}
    //         className={`button-wsp-up text-white ${icon == "wsp" ? "scroll-button-wsp" : "scroll-button"} ${showButton ? 'show' : ''}`}
    //     >
    //         {
    //             icon == "wsp" ?
    //                 (
    //                     <i className="fa-brands fa-whatsapp"></i>
    //                 ) : (
    //                     <i className="fa-solid fa-chevron-up"></i>
    //                 )
    //         }
    //     </a>
    // )
}

export default ButtonUp
