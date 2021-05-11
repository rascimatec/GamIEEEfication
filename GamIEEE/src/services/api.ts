import axios from 'axios'

const api = axios.create({
    baseURL: 'https://gamieee.herokuapp.com'
})

export default api;