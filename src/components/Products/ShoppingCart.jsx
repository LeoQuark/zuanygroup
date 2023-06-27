import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver';

// COMPONENT
import ModalEmail from './ModalEmail';
import TableCart from './TableCart';
import Offcanvas from 'react-bootstrap/Offcanvas';

// IMG
import Product1 from '../../assets/img/Product1.png'
import Product2 from '../../assets/img/Product2.png'


const ShoppingCart = ({
    cart,
    show,
    onHide,
    deleteProduct,
    clearCart
}) => {

    const [existData, setExistData] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleShow = () => setShowModal(!showModal)
    const handleClose = () => setShowModal(false)

    // funcion para obtener los datos relevantes de cada producto
    const formatDataCartShopping = (data) => {
        let newData = []
        for (const product of data) {
            newData.push({
                'Name Product': product.title,
                'Category': product.category,
                'Amount': product.amount
            })
        }
        return newData
    }

    // funcion que convierte los datos del objeto en un archivo xlsx
    const convertToXLSX = (data) => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        return excelBuffer;
    }

    // funcion para descargar el archivo xlsx
    const handleDownload = () => {
        const newData = formatDataCartShopping(cart.shoppingCart)
        const excelBuffer = convertToXLSX(newData);
        const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        saveAs(excelBlob, 'Products-Quote-ZuanyGroup.xlsx');
    }


    useEffect(() => {
        const handleExistData = () => {
            if (cart.shoppingCart.length != 0) setExistData(true)
        }
        console.log('ACTUALIZA PLS', cart.shoppingCart)
        handleExistData()

    }, [cart.shoppingCart])

    return (
        <Offcanvas
            show={show}
            onHide={onHide}
            placement={'end'}
            scroll={false}
            backdrop={true}
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>My Order <span className="badge bg-danger text-bg-secondary">{cart.shoppingCart.length}</span></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className='d-flex justify-content-between
                '>
                    <strong>Products to Quote</strong>
                    {existData &&
                        (
                            <button
                                className='btn-zg-cart-remove btn_gray_zg_inverse'
                                onClick={() => clearCart()}
                            >
                                Remove All <i className="fa-solid fa-trash-can"></i>
                            </button>
                        )}
                </div>
                <div className='position-relative' style={{ height: '95%' }}>
                    {existData ?
                        (
                            <TableCart
                                cart={cart}
                                deleteProduct={deleteProduct}
                            />
                        ) : (
                            <div className='position-absolute top-50'>
                                <p>Your cart is empty</p>
                            </div>
                        )}
                    <div className="position-absolute bottom-0 w-100">
                        <div>
                            <p className='font-sm-gray'>
                                * By submitting the quotation you are accepting our terms and conditions.
                            </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button
                                className='btn-zg-cart btn_gray_zg_inverse'
                                onClick={() => handleDownload()}
                            >
                                Download Quote <i className="fa-solid fa-circle-down fa-lg"></i>
                            </button>
                            <button
                                className='btn-zg-cart btn_pink_zg'
                                onClick={() => handleShow()}
                            >Quote by Email</button>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
            <ModalEmail
                show={showModal}
                onHide={handleClose}
            />
        </Offcanvas>
    )
}

export default ShoppingCart
