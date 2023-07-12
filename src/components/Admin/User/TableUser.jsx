import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';


const TableUser = ({ ListAdmin }) => {

    return (
        <div>
            {ListAdmin.length != 0 ?
                (
                    <Table className='table table-striped table-hover w-100' responsive>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ListAdmin.map((admin, index) => (
                                    <tr key={index}>
                                        <th scope='col'>
                                            {index + 1}
                                        </th>
                                        <td>
                                            {admin.name}
                                        </td>
                                        <td>
                                            {admin.email}
                                        </td>
                                        <td>
                                            {admin.phone}
                                        </td>
                                        <td>
                                            {admin.address}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                ) :
                (
                    <div>not found</div>
                )
            }
        </div>
    )
}

export default TableUser