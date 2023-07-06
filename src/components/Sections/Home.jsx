import React from 'react';

const Home = ({ translation }) => {

    return (
        <section id='Home'>
            <div className='container-fluid img-zg-home p-0'>
                <div className='d-flex justify-content-start align-items-center h-100 custom-bg'>
                    <div className="col-12 col-md-8 col-lg-6 px-1 px-md-0">
                        <div className="overlay">
                            <div className="d-flex justify-content-start mb-5">
                                <h1 className='text-white fw-bold'>
                                    {translation.home.title}
                                </h1>
                            </div>
                            <div className="d-flex justify-content-start mt-5">
                                <h4 className='text-white'>
                                    {translation.home.text}
                                </h4>
                            </div>
                            <div className="d-flex justify-content-between justify-content-sm-around mt-5">
                                <a href="#Services" className='btn-zg-lg btn_blue_zg_v2'>
                                    {translation.buttons.services}
                                </a>
                                <a href="#Products-section" className='btn-zg-lg btn_blue_zg_v2'>
                                    {translation.buttons.products}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className='container-fluid bg-white'>
                <div className="d-flex justify-content-center py-4 py-lg-5">
                    <p className='text-zg-blue text-center fs-lg fst-italic fw-light'>
                        “{translation.home.sentence}”
                    </p>
                </div>
            </div>
        </section >
    )
}

export default Home