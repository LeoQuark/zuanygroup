import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const TableCart = ({ cart, deleteProduct }) => {
    console.log(cart)
    return (
        <Table className='cart-table'>
            <thead>
                <tr>
                    <th>Nº</th>
                    <th>Products</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {cart.shoppingCart.map((product, index) => (
                    <tr key={product.id}>
                        {console.log('product:', product)}
                        <td>
                            <div className='h-100 d-flex justify-content-center align-items-center pt-3'>
                                <p>{index + 1}</p>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex justify-content-start h-100">
                                <img src={product.image_url} style={{ borderRadius: '10px' }} />
                                <div className='d-flex align-items-center mx-2 mx-md-4'>
                                    <p>{product.name}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='h-100 d-flex justify-content-center align-items-center pt-3'>
                                <p>{product.amount}</p>
                            </div>
                        </td>
                        <td>
                            <div className='h-100 d-flex justify-content-center align-items-center pt-2'>
                                <button
                                    className='btn-delete-item'
                                    onClick={() => deleteProduct(product.id)}
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default TableCart