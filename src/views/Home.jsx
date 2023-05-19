import React from 'react';
import { Link } from 'react-scroll'

const Home = () => {

    return (
        <section id='Home'>
            <div className='container-fluid img-zg-home p-0 m-0' >
                <div className='container d-flex justify-content-start align-items-center h-100'>
                    <div className="col-12 col-md-8 col-lg-6 px-4 px-md-0">
                        <div className="d-flex justify-content-start mb-5">
                            <h1 className='text-white fw-bold'>Efficient ports for a connected world</h1>
                        </div>
                        <div className="d-flex justify-content-start mt-5">
                            <h4 className='text-white'>Efficient shipping solutions for global logistics. Modern infrastructure and advanced technology for safe and on-time delivery.</h4>
                        </div>
                        <div className="d-flex justify-content-between justify-content-sm-around mt-5">
                            <Link
                                to="Services"
                                spy={true}
                                smooth={true}
                                duration={100}
                                type='button'
                                className='btn-zg-lg _btn-blue'
                            >Services</Link>
                            <Link
                                to="Products-section"
                                spy={true}
                                smooth={true}
                                duration={100}
                                type='button'
                                className='btn-zg-lg _btn-blue'
                            >Products</Link>
                            {/* <a type='button' className='btn-zg-lg _btn-blue' href='#Services'>
                                Services
                            </a>
                            <a type='button' className='btn-zg-lg _btn-white' href='#Products-section'>
                                Products
                            </a> */}
                        </div>
                    </div>
                </div>
            </div >
            <div className='container bg-white text-after-home'>
                <div className="d-flex justify-content-center py-4 py-lg-5">
                    <p className='text-zg-blue text-center fs-lg fst-italic fw-light'>“Connecting your business with the world: quality shipping and integrated cargo management”</p>
                </div>
            </div>
        </section >
    )
}

export default Home