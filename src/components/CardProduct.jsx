import React from 'react';

const CardProduct = ({
    tittle,
    description,
    urlImg
}) => {

    return (
        <div className="col-5 col-md-4 col-lg-2 mx-1 mx-md-4 my-3 mx-md-0">
            <div className='card-product'>
                <div className='d-block'>
                    <div className="d-flex justify-content-center">
                        <img src={urlImg} alt="" className='img-product-card img-fluid' />
                    </div>
                    <div>
                        <h4>{tittle}</h4>
                        <hr />
                    </div>
                    <div>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className='d-flex justify-content-center my-2'>
                        <button type='button' className='btn-zg-lg _btn-blue'>
                            Add to cart <i className="bi bi-cart px-2 px-md-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardProduct