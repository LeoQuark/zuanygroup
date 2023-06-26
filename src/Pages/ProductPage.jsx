import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import NavProduct from '../components/Products/NavProduct'
import ProductsContent from '../components/Products/ProductsContent'
// import AllProducts from '../components/Products/AllProducts';

// IMG
import Product1 from '../assets/img/Product1.png'
import Product2 from '../assets/img/product2.png'

const ProductMockup = [
    {
        id: '1',
        title: 'Name Products 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Engines',
        image: Product1
    },
    {
        id: '2',
        title: 'Name Products 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    },
    {
        id: '3',
        title: 'Name Products 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Engines',
        image: Product1
    },
    {
        id: '4',
        title: 'Name Products 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    },
    {
        id: '5',
        title: 'Name Products 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Engines',
        image: Product1
    },
    {
        id: '6',
        title: 'Name Products 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    },
    {
        id: '7',
        title: 'Name Products 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Engines',
        image: Product1
    },
    {
        id: '8',
        title: 'Name Products 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    },
    {
        id: '9',
        title: 'Name Products 9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Engines',
        image: Product1
    },
    {
        id: '10',
        title: 'Name Products 10',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    },
    {
        id: '11',
        title: 'Name Products 11',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Engines',
        image: Product1
    },
    {
        id: '12',
        title: 'Name Products 12',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non purus feugiat, lacinia ex eget, lacinia risus.',
        category: 'Repairs',
        image: Product2
    }
]

const ProductPage = () => {

    // nav products state
    const [searchProduct, setSearchProduct] = useState('')
    const [categories, setCategories] = useState(['Select Categories', 'Category 1', 'Category 2', 'Category 3'])
    const [orderBy, setOrderBy] = useState(['Order By', 'Most Popular', 'A-Z', 'Z-A'])

    const [selectCategories, setSelectcategories] = useState('')

    const handleSearch = (event) => setSearchProduct(event.target.value)
    const handleCategory = (event) => setSelectcategories(event.target.value)

    // API lectura de los productos aquiiiii

    return (
        <div>
            <Navbar />
            <div className='all-products container-fluid mt-2 mt-md-0'>
                <NavProduct
                    searchProduct={searchProduct}
                    handleSearch={handleSearch}
                    categories={categories}
                    orderBy={orderBy}
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