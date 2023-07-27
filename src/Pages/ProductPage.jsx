import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom'
import LanguageContext from '../context/language/LanguageContext.js';
import axios from 'axios';
import { getAllProducts } from '../utils/requestsApi.js'

// TRANSLATION
import enTranslation from '../utils/en.json'
import esTranslation from '../utils/es.json'

import Navbar from '../components/Navbar'
import NavProduct from '../components/Products/NavProduct'
import ProductsContent from '../components/Products/ProductsContent'
import ButtonUp from '../components/ButtonUp.jsx'

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

    const { lang } = useContext(LanguageContext)
    const { hash } = useLocation()


    // nav products state
    const [searchProduct, setSearchProduct] = useState('')
    const [allProducts, setAllProducts] = useState(false)
    const [categories, setCategories] = useState(['Select Categories', 'Category 1', 'Category 2', 'Category 3'])
    const [orderBy, setOrderBy] = useState(['Order By', 'Most Popular', 'A-Z', 'Z-A'])

    const [selectCategories, setSelectcategories] = useState('')

    const handleSearch = (event) => setSearchProduct(event.target.value)
    const handleCategory = (event) => setSelectcategories(event.target.value)

    const translation = lang.language === 'es' ? enTranslation : esTranslation

    // API lectura de los productos aquiiiii
    const getAllProductsFunction = async () => {
        const response = await getAllProducts()
        setAllProducts(response)
    }

    useEffect(() => {
        getAllProductsFunction()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        if (hash) {
            // Remover el símbolo '#' del ID
            const id = hash.substring(1);

            // Realizar el scrolling automático al elemento con el ID correspondiente
            const targetElement = document.getElementById(id);

            if (targetElement) {

                // controlar la duración del scroll
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                }, 250);
            }
        } else {
            // Si no hay hash en la URL, hacer scroll al inicio de la página
            window.scrollTo(0, 0);
        }
    }, [location])

    return (
        <div>
            <Navbar translation={translation} />
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
                            <Link to='/zg'>
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">All Products</li>
                    </ol>
                </div>
                <div className="container">
                    <ProductsContent
                        allProducts={allProducts}
                    // ProductMockup={ProductMockup}
                    />
                </div>
            </div >
            <ButtonUp to='/all-products' />
        </div>
    )
}

export default ProductPage