import React, { useState, useEffect } from 'react';
import TableCart from '../TableCart';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
    cart,
    show,
    onHide
}) => {

    const [existData, setExistData] = useState(false)

    useEffect(() => {
        const handleExistData = () => cart.shoppingCart.length == 0 ? setExistData(false) : setExistData(true)
        handleExistData()
    }, [])

    console.log(cart)
    return (
        <Offcanvas
            show={show}
            onHide={onHide}
            placement={'end'}
            scroll={false}
            backdrop={true}
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>My Order <span class="badge bg-danger text-bg-secondary">{cart.shoppingCart.length}</span></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className='d-flex justify-content-start
                '>
                    <strong>Products to Quote</strong>
                </div>
                <div className='position-relative' style={{ height: '95%' }}>
                    {existData ?
                        <TableCart cart={cart} /> : (
                            <div className='position-absolute top-50'>
                                <p>Your cart is empty</p>
                            </div>
                        )}
                    <div class="position-absolute bottom-0 w-100">
                        <div>
                            <p className='font-sm-gray'>
                                * By submitting the quotation you are accepting our terms and conditions.
                            </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button className='btn-zg-cart btn_pink_zg_inverse'>Download Quote <i class="fa-solid fa-circle-down fa-lg"></i></button>
                            <button className='btn-zg-cart btn_pink_zg'>Quote by Email</button>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default CardOrder
