import axios from 'axios'
import { APIURL } from './apiData'

// PRODUCTS
export const getAllProducts = async () => {
    const response = await axios.get(`${APIURL}/products/getAll`)
    const data = response.data.data

    if (!data || data == undefined)
        return false

    // console.log('all products', data)

    return data
}

// CATEGORY
export const getAllCategory = async () => {
    const response = await axios.get(`${APIURL}/categories/getAll`)
    const data = response.data.data

    if (!data || data == undefined)
        return false

    // console.log('all categories', data)

    return data
}