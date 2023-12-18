import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getRandomProduct } from '../../utils/requestsApi'

// IMG
import Product1 from '../../assets/img/Product1.png'
import Product2 from '../../assets/img/Product2.png'

import CardProduct from '../Products/CardProduct'

const DivProduct = ({ product }) => {
    return (
        <div className='col-5 col-sm-6 col-md-3 col-lg-2 my-3 my-lg-0'>
            <CardProduct product={product} />
        </div>
    )
}

const Products = ({ translation }) => {

    const [productRandom, setProductRandom] = useState(false)

    const getAllProductsFunction = async () => {
        const response = await getRandomProduct()
        console.log('products', response)
        setProductRandom(response)
    }

    useEffect(() => {
        getAllProductsFunction()
    }, [])


    return (
        <section className="container-fluid" id='Products-section'>
            <div className='px-0 px-sm-5 px-md-0'>
                <div className="d-flex justify-content-center">
                    <div className='mt-2 pb-3 pb-md-5'>
                        <h2 className='tittle-section'>{translation.products.title}</h2>
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-2">
                    <div className='text-section text-center'>
                        <p>{translation.products.text}</p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center mt-4 mx-2 mx-md-0">
                    {productRandom && productRandom.map((product, index) => (
                        <DivProduct key={index} product={product} />
                    ))}
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <div className='mt-2'>
                        <Link
                            to='/all-products'
                            relative="path"
                            className='btn-zg-lg btn_pink_zg'
                        >
                            {translation.buttons.allproducts}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products