import React from 'react';

const AboutUs = () => {

    return (
        <section className='container text-center card-aboutus' id='AboutUs' >
            <div className="row align-items-center justify-content-center">
                <div className="row d-flex justify-content-center py-5 gap-4">
                    <div className="col-12 col-md-5 col-lg-5">
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <img src="/img/img-company.png" alt="" className='img-fluid img-company' />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-5 my-3 my-md-0">
                        <div className='row align-items-center justify-content-center h-100 text-center text-md-start text-white'>
                            <h2 className='fs-our-company mb-5 mb-md-4'>Our Company</h2>
                            <div className='pl-5'>
                                <p>ZUANY GROUP is a shipchandler company , dedicated to supply from the most varied to even the most basic products and services required for proper human and technical functioning of merchant vessels transiting across chilean ports.

                                    <br /><br />
                                    Since its inception in San Antonio port 1992, ZUANY GROUP has been in proximity, understanding the needs of its customers with responsibility and honesty, which has led win through the years the prestige necessary to position ZUANY GROUP on the market.
                                    <br />
                                    <br />
                                    In 20 years of experience, efficiency is reached through the implementation of a modern adequate infrastructure and the formation of a team of professionals committed to the satisfaction of those who prefer ZUANY GROUP.
                                    <br />
                                    <br />
                                    The ZUANY GROUP concern is its customers receive the services and products according to the formality request, considering the quality, weight and prompt delivery, supplying 365 days a year, 24/7 a week.</p>
                            </div>
                            <div className='mt-5 mt-md-3'>
                                <a type='button' className='btn-zg-lg _btn-white-pink' href='#Contacts'>
                                    Contact Us!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs