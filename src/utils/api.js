import axios from 'axios';
const params = {
    headers: {
        Authorization: "bearer " + import.meta.env.VITE_STRIPE_API_KEY
    }
}
console.log(params)
export const fetchDataFromApi =async (url) => {
    try {
        const {data} = await axios.get(import.meta.env.VITE_DEV_URL + url, params);
        console.log(data)
        return data;
    }catch(error) {
        console.log(error)
        return error
    }
}

export const makePaymentRequest = axios.create({
    baseURL: import.meta.env.VITE_DEV_URL,
    headers: {
        Authorization: "bearer " + import.meta.env.VITE_STRIPE_API_KEY
    }
})