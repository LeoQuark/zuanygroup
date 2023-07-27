import axios from 'axios'
import { APIURL } from './apiData'

export const getAllProducts = async () => {
    const response = await axios.get(`${APIURL}/products/getAll`)
    const data = response.data.data

    if (!data || data == undefined)
        return false

    console.log('all products', data)

    return data
}