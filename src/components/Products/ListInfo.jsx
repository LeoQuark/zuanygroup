import React, { useState, useEffect } from 'react';

const ListInfo = ({ product }) => {
    return (
        <div className='d-flex justify-content-start w-100 modal-text'>
            {
                product.source_file === 'Bonded' ?
                    (
                        <table className='table table-hover table-sm w-75'>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <td>{`${product.category.name}`}</td>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <td>{`${product.price}`}</td>
                                </tr>
                                <tr>
                                    <th>Unit Per Box</th>
                                    <td>{`${product.unit}`}</td>
                                </tr>
                            </thead>
                        </table>
                    ) :
                    (
                        <table className='table table-hover table-sm w-50'>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <td>{`${product.category.name}`}</td>
                                </tr>
                                <tr>
                                    <th>Weight</th>
                                    <td>{`${product.weight} ${product.measure}`}</td>
                                </tr>
                                <tr>
                                    <th>Packing</th>
                                    <td>{`${product.packing}`}</td>
                                </tr>
                            </thead>
                        </table>
                    )
            }
        </div>
    )
}

export default ListInfo

{/* <ul class="list-group list-group-flush mx-0 w-50">
                            <li class="list-group-item list-group-item-action p-0"></li>
                            <li class="list-group-item">provision</li>
                        </ul> */}