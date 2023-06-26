import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const TableCart = ({ cart, deleteProduct }) => {

    useEffect(() => { }, [cart])

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
                        {console.log('productss', product)}
                        <td>{index + 1}</td>
                        <td>
                            <div className="d-flex justify-content-start h-100">
                                <img src={product.image} />
                                <div className='d-flex align-items-center mx-2 mx-md-4'>
                                    <p>{product.title}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            {product.amount}
                        </td>
                        <td>
                            <button
                                className='btn-delete-item'
                                onClick={() => deleteProduct(product.id)}
                            >
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default TableCart