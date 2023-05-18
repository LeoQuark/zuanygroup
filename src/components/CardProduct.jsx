import React from 'react';

const CardProduct = ({
    tittle,
    description,
    urlImg
}) => {

    return (
        <div className="col-5 col-md-6 col-lg-2 my-3 my-lg-0">
            <div className='card-product'>
                <div className='d-block'>
                    <div className="d-flex justify-content-center">
                        <img src={urlImg} alt="" className='img-product-card img-fluid' />
                    </div>
                    <div className='my-2'>
                        <h5 className='tittle-product-card'><strong>{tittle}</strong></h5>
                        <hr />
                    </div>
                    <div className='w-100'>
                        <p className='p-0 m-0'>
                            {description}
                        </p>
                    </div>
                    <div className='d-flex justify-content-center mt-2 mt-md-3'>
                        <button type='button' className='btn-card-product font-bold text-button-product'>
                            Add to cart<i className="bi bi-cart px-2 px-md-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardProduct