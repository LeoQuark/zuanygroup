import axios from 'axios'
import { APIURL } from './apiData'

import { data } from './data'
import { getFourNumber, getRandomProducts } from './functionFormat'

// PRODUCTS
export const getAllProducts = async () => {
    // LLAMADA A LA API
    // const response = await axios.get(`${APIURL}/products/getAll`)
    // const data = response.data.data


    // OBTENCION DE PRODUCTOS DESDE DATA EN JSON (SIN API)
    const data = data.data

    if (!data || data == undefined)
        return false
    return data
}

// CATEGORY
export const getAllCategory = async () => {
    // LLAMADA A LA API
    // const response = await axios.get(`${APIURL}/categories/getAll`)
    // const data = response.data.data

    // OBTENCION DE PRODUCTOS DESDE DATA EN JSON (SIN API)
    const data = dataBaseJson.data

    if (!data || data == undefined)
        return false
    return data
}

import IMG from '../assets/img_products/dairy products.webp'

export const getRandomProduct = async () => {
    // LLAMADA A LA API
    // const response = await axios.get(`${APIURL}/products/getRandom`)
    // const data = response.data.data
    // if (!data || data == undefined)
    //     return false
    // return data


    // OBTENCION DE PRODUCTOS DESDE DATA EN JSON (SIN API)
    const allProducts = data.data
    // numero total de productos
    const totalProducts = allProducts.length
    // se obtiene 4 numeros random en base al total de productos
    const fourNumberRandom = getFourNumber(totalProducts)
    // se obtienen los 4 productos random en base a su indice
    // const productsRandom = getRandomProducts(fourNumberRandom, allProducts)

    // console.log(productsRandom)

    const productsRandom = [
        {
            "id": "ae6bcf8e-f2b6-4991-8855-121cefe79c4d",
            "name": "Fruit juice we offer",
            "quantity": 0,
            "total": "0.00",
            "number_quote": 0,
            "comment": null,
            "price": null,
            "unit": null,
            "packing": "BOX 12 LTS",
            "weight": "1.60",
            "measure": "LT",
            "source_file": "Provision",
            "category_id": "c388d0e9-2c35-46c0-ac6f-4eb694f9868f",
            "image_url": "../assets/img_products/dairy products.webp",
            // "image_url": `${IMG}`,
            "createdAt": "2023-08-10T03:52:22.000Z",
            "updatedAt": "2023-08-10T03:52:22.000Z",
            "category": {
                "id": "c388d0e9-2c35-46c0-ac6f-4eb694f9868f",
                "name": "Dairy products",
                "createdAt": "2023-08-10T03:52:22.000Z",
                "updatedAt": "2023-08-10T03:52:22.000Z"
            }
        },
        {
            "id": "48c5a054-76ea-4c6a-bb17-37ec51aa1b8b",
            "name": "Fruit cocktail",
            "quantity": 0,
            "total": "0.00",
            "number_quote": 0,
            "comment": null,
            "price": null,
            "unit": null,
            "packing": "BOX 24 TIN X 820 GRS",
            "weight": "3.55",
            "measure": "TIN",
            "source_file": "Provision",
            "category_id": "c66539fa-ee08-4895-b634-5903d3049305",
            "image_url": "http://localhost:4000/products/get/image/dry products.webp",
            "createdAt": "2023-08-10T03:52:22.000Z",
            "updatedAt": "2023-08-10T03:52:22.000Z",
            "category": {
                "id": "c66539fa-ee08-4895-b634-5903d3049305",
                "name": "Dry products",
                "createdAt": "2023-08-10T03:52:22.000Z",
                "updatedAt": "2023-08-10T03:52:22.000Z"
            }
        },
        {
            "id": "20848736-47f1-43ce-ac53-a737611a5fc2",
            "name": "Sandwich churrasco and cheese",
            "quantity": 0,
            "total": "0.00",
            "number_quote": 0,
            "comment": null,
            "price": "15.00",
            "unit": "PC SKIRT STEAK AND CHEESE (10 CM)",
            "packing": null,
            "weight": null,
            "measure": null,
            "source_file": "Bonded",
            "category_id": "f030b934-1838-49df-a5d4-6f07ed7503f9",
            "image_url": "http://localhost:4000/products/get/image/sandwichs and others meals.webp",
            "createdAt": "2023-08-10T03:52:27.000Z",
            "updatedAt": "2023-08-10T03:52:27.000Z",
            "category": {
                "id": "f030b934-1838-49df-a5d4-6f07ed7503f9",
                "name": "Sandwichs and others meals",
                "createdAt": "2023-08-10T03:52:27.000Z",
                "updatedAt": "2023-08-10T03:52:27.000Z"
            }
        },
        {
            "id": "b50a21c2-67d5-4267-8a48-234b665208b8",
            "name": "Strawberry",
            "quantity": 0,
            "total": "0.00",
            "number_quote": 0,
            "comment": null,
            "price": null,
            "unit": null,
            "packing": "PER KG",
            "weight": "4.80",
            "measure": "KG",
            "source_file": "Provision",
            "category_id": "f6b0b7bd-2353-43df-a592-8bbb4f314994",
            "image_url": "http://localhost:4000/products/get/image/seasonal fruits.webp",
            "createdAt": "2023-08-10T03:52:22.000Z",
            "updatedAt": "2023-08-10T03:52:22.000Z",
            "category": {
                "id": "f6b0b7bd-2353-43df-a592-8bbb4f314994",
                "name": "Seasonal fruits",
                "createdAt": "2023-08-10T03:52:22.000Z",
                "updatedAt": "2023-08-10T03:52:22.000Z"
            }
        }
    ]

    if (!productsRandom || productsRandom == undefined)
        return false
    return productsRandom
}

// SEND MAIL
export const sendMail = async (data) => {
    const send = await axios.post(`${APIURL}/email/send`, data)

    const response = send.msg

    console.log('response send mail: ', send)
}