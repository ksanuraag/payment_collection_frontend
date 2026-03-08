import axios from "axios"

const API = axios.create({
    baseURL: "/bank"
});

export default API