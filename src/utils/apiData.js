export const APIURL = import.meta.env.VITE_APP_ISPROD ? import.meta.env.VITE_API_LOCAL_URL : import.meta.env.VITE_APP_API_PROD_URL

console.log(APIURL)

export default APIURL