import React, { useState, useEffect } from 'react';

import BreadCrumb from '../BreadCrumb'
import TableUser from './TableUser'
import CardEditInfo from './CardEditInfo'
import CardEditPhoto from './CardEditPhoto'

const ListAdmin = [
    {
        id: 1,
        name: 'Name 1',
        email: 'test@gmail.com',
        phone: '+569 9923 7917',
        address: 'address example #1244'
    },
    {
        id: 2,
        name: 'Name 2',
        email: 'test@gmail.com',
        phone: '+569 9923 7917',
        address: 'address example #1244'
    },
    {
        id: 2,
        name: 'Name 3',
        email: 'test@gmail.com',
        phone: '+569 9923 7917',
        address: 'address example #1244'
    },
    {
        id: 2,
        name: 'Name 4',
        email: 'test@gmail.com',
        phone: '+569 9923 7917',
        address: 'address example #1244'
    }
]

const UserSetting = () => {

    return (
        <div className='container-fluid h-100'>
            <div className="d-flex justify-content-start p-0">
                <BreadCrumb section='User Profile' />
            </div>
            <div className="row d-flex justify-content-between w-100 m-0">
                <div className="col-12 col-md-6 pb-3 pb-sm-0 px-0">
                    <CardEditInfo />
                </div>
                <div className="col-12 col-md-5 pt-3 pt-sm-0 px-0">
                    <CardEditPhoto />
                </div>
            </div>
            <div className="row d-flex w-100 mt-3 shadow-sm rounded p-0">
                <div className="col-12 p-4">
                    <p className='title-user'>Information From Other Administrators</p>
                    <TableUser ListAdmin={ListAdmin} />
                </div>
            </div>
        </div>
    )
}

export default UserSetting