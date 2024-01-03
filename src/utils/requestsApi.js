import axios from 'axios'
// import { APIURL } from './apiData'
import { data, dataCategory } from './data'
import { getFourNumber, getRandomProducts } from './functionFormat'

console.log("data from data.js", data)


// PRODUCTS
export const getAllProducts = async () => {
    // console.log("hola 3", data)

    // LLAMADA A LA API
    // const response = await axios.get(`${APIURL}/products/getAll`)
    // const data = response.data.data

    // OBTENCION DE PRODUCTOS DESDE DATA EN JSON (SIN API)
    // const data = data
    // console.log("data", data)


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
    const data = dataCategory

    console.log(data)

    if (!data || data == undefined)
        return false
    return data
}

export const getRandomProduct = async () => {
    // LLAMADA A LA API
    // const response = await axios.get(`${APIURL}/products/getRandom`)
    // const data = response.data.data
    // if (!data || data == undefined)
    //     return false
    // return data


    // OBTENCION DE PRODUCTOS DESDE DATA EN JSON (SIN API)
    const allProducts = data

    // console.log(allProducts)
    // numero total de productos
    const totalProducts = allProducts.length
    // se obtiene 4 numeros random en base al total de productos
    const fourNumberRandom = getFourNumber(totalProducts)
    // se obtienen los 4 productos random en base a su indice
    const productsRandom = getRandomProducts(fourNumberRandom, allProducts)

    // console.log(`productsRandom: ${productsRandom}`)

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