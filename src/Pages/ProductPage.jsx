import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../context/cart/CartContext';

import Navbar from '../components/Navbar'
import NavProduct from '../components/Products/NavProduct'
import ProductsContent from '../components/Products/ProductsContent'
// import AllProducts from '../components/Products/AllProducts';

// IMG
import Product1 from '../assets/img/Product1.png'
import Product2 from '../assets/img/product2.png'

const ProductMockup = [
    {
        title: 'Name Products 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Engines',
        image: Product1
    },
    {
        title: 'Name Products 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    },
    {
        title: 'Name Products 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Engines',
        image: Product1
    },
    {
        title: 'Name Products 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    },
    {
        title: 'Name Products 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Engines',
        image: Product1
    },
    {
        title: 'Name Products 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    },
    {
        title: 'Name Products 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Engines',
        image: Product1
    },
    {
        title: 'Name Products 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    },
    {
        title: 'Name Products 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Engines',
        image: Product1
    },
    {
        title: 'Name Products 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    },
    {
        title: 'Name Products 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Engines',
        image: Product1
    },
    {
        title: 'Name Products 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    }
]

// const CategoriesMockup = ['Category 1', 'Category 2', 'Category 3']

// console.log('ProductMockup2', ProductMockup)

const ProductPage = () => {
    // console.log('ProductMockup1', ProductMockup)

    const { cart, clearCart } = useContext(CartContext)

    // nav products state
    const [searchProduct, setSearchProduct] = useState('')
    const [categories, setCategories] = useState(['Category 1', 'Category 2', 'Category 3'])
    const [selectCategories, setSelectcategories] = useState('')

    const handleSearch = (event) => setSearchProduct(event.target.value)
    const handleCategory = (event) => setSelectcategories(event.target.value)

    // console.log(cart)



    // API lectura de los productos aquiiiii


    return (
        <div>
            <Navbar />
            <div className='all-products container-fluid mt-4 mt-md-0'>
                <NavProduct
                    cart={cart}
                    searchProduct={searchProduct}
                    handleSearch={handleSearch}
                    categories={categories}
                    selectCategories={selectCategories}
                    handleCategory={handleCategory}
                />
                <div className='breadcumb-product pt-3 mx-3 mx-md-5' aria-label="breadcrumb">
                    <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">All Products</li>
                    </ol>
                </div>
                <div className="container">
                    <ProductsContent
                        ProductMockup={ProductMockup}
                    />
                </div>
            </div >
        </div>
    )
}

export default ProductPage