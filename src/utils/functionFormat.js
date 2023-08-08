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
        await sendMail(data)

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