import React, { useState, useEffect } from 'react';

import BreadCrumb from '../BreadCrumb';
import NavInventory from './NavInventory';
import TableInventory from './TableInventory';
import Loading from '../../Loading'

// IMG
import Product1 from '../../../assets/img/product1.png'
import Product2 from '../../../assets/img/product2.png'


const ProductMockup = [
    {
        id: '1',
        title: 'Name Products 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Engines',
        image: Product1,
        weight: '9,00',
        measure: 'KG'
    },
    {
        id: '2',
        title: 'Name Products 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2,
        weight: '9,00',
        measure: 'KG'
    }
]

const Inventory = () => {

    const [nameSelected, setNameSelected] = useState('provision')
    const [btnProvision, setBtnProvision] = useState(true)
    const [btnBounded, setBtnBounded] = useState(false)
    const [btnCategory, setBtnCategory] = useState(false)

    const handleButton = (event) => {
        // console.log(event.target.name)
        const btnClick = event.target.name
        setNameSelected(btnClick)
        if (btnClick === 'provision') {
            setBtnProvision(true)
            setBtnBounded(false)
            setBtnCategory(false)
        }
        else if (btnClick === 'bounded') {
            setBtnProvision(false)
            setBtnBounded(true)
            setBtnCategory(false)
        }
        else if (btnClick === 'category') {
            setBtnProvision(false)
            setBtnBounded(false)
            setBtnCategory(true)
        }
    }

    useEffect(() => {
        console.log('asas', nameSelected)

        //   return () => {
        //     second
        //   }
    }, [handleButton])


    return (
        <div className='container-fluid h-100'>
            <div className="d-flex justify-content-start p-0">
                <BreadCrumb section='Inventory' />
            </div>
            <div>
                <NavInventory
                    handleButton={handleButton}
                />
            </div>
            <div className='row d-flex w-100 m-0 mt-4 shadow-sm rounded'>
                <p className='title-admin'>{`inventory of ${nameSelected}`}</p>
                <div className="d-flex justify-content-start gap-4">
                    <div>
                        <input type="text" className='form-control' placeholder='Enter Name product' />
                    </div>
                    <div>
                        <select className='form-select'>
                            <option>sasa</option>
                        </select>
                    </div>
                </div>
                <div className='d-flex justify-content-center w-100'>
                    {true ?
                        (
                            <TableInventory products={ProductMockup} />
                        ) : (
                            <Loading text='Loading Your Data' />
                        )}
                </div>
            </div>
        </div>
    )
}

export default Inventory