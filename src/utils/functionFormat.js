import { sendMail } from "./requestsApi"

export const formatText = (text) => {
    const nameLower = text.toLowerCase()
    return nameLower.charAt(0).toUpperCase() + nameLower.slice(1)
}

export const sendMailSubmit = async (customerData, productCart = false) => {
    event.preventDefault()
    console.log('send email')

    // enviar correos sin productos
    if (!productCart || productCart.length == 0) {
        const data = { customerData }
        console.log('llegara')
        const res = await sendMail(data)
        console.log('res:', res)
        return true
    }

    // enviar correos con productos
    const data = {
        customerData,
        productCart
    }
    await sendMail(data)
    console.log('data send', data)

    return true

}

// OBTENER NUMEROS RANDOM
export const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

// OBTENER 4 NUMEROS RANDOM DEL TOTAL DE UN ARRAY
export const getFourNumber = (amount) => {
    const result = [];
    const max = amount;

    for (let i = 0; i < 4; i++) {
        const randomNum = getRandomInt(max);
        result.push(randomNum);
    }

    return result;
}

// OBTENER PRODUCTOS RANDOM
export const getRandomProducts = (listaIndices, listaObjetos) => {
    const productosEncontrados = [];

    for (const indice of listaIndices) {
        if (indice >= 0 && indice < listaObjetos.length) {
            productosEncontrados.push(listaObjetos[indice]);
        }
    }

    return productosEncontrados;
}
