const APIURL = process.env.REACT_APP_ISPROD ?
    process.env.REACT_APP_API_PROD_URL : process.env.REACT_APP_API_LOCAL_URL


export default APIURL