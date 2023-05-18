import React from 'react';

const Footer = () => {

    return (
        <footer className='bg-zg-blue'>
            <div className="container pt-5">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-5">
                        <div className="d-flex justify-content-center">
                            <h3>Zuany Group Chile</h3>
                        </div>
                        <div className='my-4'>
                            <p className='fst-italic text-center'>“Connecting your business with the world: quality shipping and integrated cargo management”</p>
                        </div>
                        <div className="d-flex justify-content-around my-4">
                            <a href='#Services' className='btn-zg-pink'>Services</a>
                            <a href='#Products-section' className='btn-zg-pink'>Products</a>
                            <a href='#AboutUs' className='btn-zg-pink'>About Us</a>
                        </div>
                    </div>
                    <div className="col-1 text-center divider-footer"></div>
                    <div className="col-12 col-lg-5">
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <p>Keep browsing in our website!</p>
                        </div>
                        <div className='row d-flex justify-content-between my-2'>
                            <div className="col-5">
                                <ul className='footer-menu'>
                                    <li>Home</li>
                                    <li>Company</li>
                                    <li>Logistics</li>
                                    <li>Contacts</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <div className="d-flex justify-content-center">
                                    <i class="bi bi-geo-alt-fill icon-footer"></i>
                                    <div className='mx-4 text-start'>
                                        <strong>Address</strong>
                                        <p className='font-sm'>Esperidión Vera 1522 San Antonio, Chile</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <i class="bi bi-envelope-fill icon-footer"></i>
                                    <div className='mx-4 text-start'>
                                        <strong>Email</strong>
                                        <p className='font-sm'>zuanygroup@zuanygroup.cl
                                            zuanydominguez@zuanygroup.cl
                                            secretaria@zuanygroup.cl</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <p>Copyright <i class="fa-regular fa-copyright"></i> 2023  - All rights reserver by <strong>Zuany Group</strong></p>
            </div>
        </footer>
    )
}

export default Footer