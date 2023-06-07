import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

// IMG
import Product1 from '../../assets/img/Product1.png'
import Product2 from '../../assets/img/Product2.png'

const ProductMockup = [
    {
        title: 'Name Products 1',
        // price: '149.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'engines',
        image: Product1
    },
    {
        title: 'Name Products 2',
        // price: '149.00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    }
]

const CardOrder = ({
    cart
}) => {

    return (
        <div className='row d-flex my-0 my-md-4 px-4 px-md-5'>
            <div className='card-order container-fluid'>
                <div className="row d-flex justify-content-between h-100">
                    <div className="col-12 col-lg-6">
                        <div className="d-flex justify-content-start pt-3 mx-2 mx-md-4">
                            <h3 className='tittle-cart'>Cart</h3>
                        </div>
                        <div className='pt-3 mx-2 mx-md-4'>
                            <Table responsive className='cart-table'>
                                <thead>
                                    <tr>
                                        <th>Nº</th>
                                        <th>Products</th>
                                        <th>Description</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.shoppingCart.map((product, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="d-flex justify-content-start h-100">
                                                    <img src={product.image} alt="" />
                                                    <div className='d-flex align-items-center mx-2 mx-md-4'>
                                                        <h5>{product.title}</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='h-100'>
                                                    <p className='d-flex align-content-center description'>{product.description}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='h-100'>
                                                    <p className='d-flex justify-content-center align-items-center amount'>2</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='h-100'>
                                                    <p className='d-flex justify-content-center align-items-center amount'>2</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="col-1 text-center cart-divider my-0 my-md-5">
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="d-flex justify-content-start pt-3 mx-2 mx-md-4">
                            <h3 className='tittle-cart'>Total</h3>
                        </div>
                        {/* <div className="d-flex justify-content-start pt-5 mx-2 mx-md-4">
                            <h3 className='tittle-cart'>Total</h3>
                        </div> */}
                        <div className="d-flex justify-content-between align-items-end">
                            <button className='btn-zg-cart btn_pink_zg_inverse'>Download Quote <i class="fa-solid fa-circle-down fa-lg"></i></button>
                            <button className='btn-zg-cart btn_pink_zg'>Quote by Email</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardOrder
