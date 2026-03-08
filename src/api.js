import axios from "axios"

const API=axios.create({
    baseURL:"http://localhost:8000/bank"
});

export default API