import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const TableCart = ({ cart, deleteProduct }) => {

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
                        <td>
                            <div className='h-100 d-flex justify-content-center align-items-center pt-3'>
                                <p>{index + 1}</p>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex justify-content-start h-100">
                                <img src={product.image} />
                                <div className='d-flex align-items-center mx-2 mx-md-4'>
                                    <p>{product.title}</p>
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
                                    <i class="fa-solid fa-xmark"></i>
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