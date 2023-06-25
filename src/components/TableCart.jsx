import React from 'react';
import Table from 'react-bootstrap/Table';

const TableCart = ({ cart }) => {

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
                        {/* <td>
                            <div className='h-100'>
                                <p className='d-flex align-content-center description'>{product.description}</p>
                            </div>
                        </td> */}
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
    )
}

export default TableCart