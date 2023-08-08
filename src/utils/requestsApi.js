import axios from 'axios'
import { APIURL } from './apiData'

// PRODUCTS
export const getAllProducts = async () => {
    const response = await axios.get(`${APIURL}/products/getAll`)
    const data = response.data.data

    if (!data || data == undefined)
        return false
    return data
}

// CATEGORY
export const getAllCategory = async () => {
    const response = await axios.get(`${APIURL}/categories/getAll`)
    const data = response.data.data

    if (!data || data == undefined)
        return false
    return data
}

export const getRandomProduct = async () => {
    const response = await axios.get(`${APIURL}/products/getRandom`)
    const data = response.data.data

    if (!data || data == undefined)
        return false
    return data
}

// SEND MAIL
export const sendMail = async (data) => {
    const send = await axios.post(`${APIURL}/email/send`, data)

    const response = send.msg

    console.log('response send mail: ', response)
}