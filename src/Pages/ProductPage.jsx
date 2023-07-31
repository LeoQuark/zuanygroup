import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom'
import LanguageContext from '../context/language/LanguageContext.js';
import axios from 'axios';
import { getAllProducts, getAllCategory } from '../utils/requestsApi.js'
import { formatText } from '../utils/functionFormat.js'

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
    const [search, setSearch] = useState('')
    const [allProducts, setAllProducts] = useState(false)
    const [allProductsInit, setAllProductsInit] = useState(false)
    // const [categories, setCategories] = useState(['Select Categories', 'Category 1', 'Category 2', 'Category 3'])
    const [categories, setCategories] = useState(false)
    const [selectCategories, setSelectCategories] = useState(false)
    const [orderBy, setOrderBy] = useState(false)

    const translation = lang.language === 'es' ? enTranslation : esTranslation

    const handleSearch = (event) => setSearch(formatText(event.target.value))
    const handleCategory = (event) => setSelectCategories(event.target.value)
    const handleOrder = (event) => setOrderBy(event.target.value)

    const getAllProductsFunction = async () => {
        const response = await getAllProducts()
        console.log('products', response)
        setAllProducts(response)
        setAllProductsInit(response)
    }

    const getAllCategoryFunction = async () => {
        const response = await getAllCategory()
        console.log('categories', response)
        setCategories(response)
    }

    const filterProduct = (nameProduct) => allProductsInit.filter(
        element => element.name.includes(nameProduct) || element.category.name.includes(nameProduct))

    const filterCategory = (category) => {
        if (selectCategories == 'reset')
            return allProductsInit

        return allProductsInit.filter(element => element.category.id == category)
    }

    const filterOrderBy = (orderBy) => {
        if (orderBy == 'reset') {
            return allProductsInit
        } else if (orderBy === 'popular') {
            console.log(orderBy)
            // return allProductsInit.sort((a, b) => a.nombre.localeCompare(b.nombre));
        } else if (orderBy === 'asc') {
            console.log(orderBy, 'asencente')
            return allProductsInit.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
        } else if (orderBy === 'desc') {
            console.log(orderBy)
            // return allProductsInit.sort((a, b) => a.nombre.localeCompare(b.nombre));
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getAllProductsFunction()
        getAllCategoryFunction()
    }, [])

    // useEffect(() => {
    //     console.log('l;eo')
    // }, [allProducts])

    useEffect(() => {
        console.log('search', search, selectCategories, orderBy)
        if (search) {
            const filter = filterProduct(search)
            console.log(filter)
            setAllProducts(filter)
        }
        else if (selectCategories) {
            console.log('selectCategories', selectCategories)
            const filter = filterCategory(selectCategories)
            setAllProducts(filter)
        }
        else if (orderBy) {
            console.log('orderBy', orderBy)
            const filter = filterOrderBy(orderBy)
            console.log('filter', filter)
            setAllProducts(filter)
        }
    }, [search, selectCategories, orderBy])

    useEffect(() => {
        if (hash) {
            // Remover el símbolo '#' del ID
            const id = hash.substring(1);

            // Realizar el scrolling automático al elemento con el ID correspondiente
            const targetElement = document.getElementById(id);

            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                }, 250);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location])

    return (
        <div>
            <Navbar translation={translation} />
            <div className='all-products container-fluid mt-2 mt-md-0'>
                <NavProduct
                    searchProduct={search}
                    handleSearch={handleSearch}
                    categories={categories}
                    orderBy={orderBy}
                    selectCategories={selectCategories}
                    handleCategory={handleCategory}
                    handleOrder={handleOrder}
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
                    <ProductsContent allProducts={allProducts} />
                </div>
            </div >
            <ButtonUp to='/all-products' />
        </div>
    )
}

export default ProductPage