import axios from 'axios'
import config from '../Settings/config.js'

const api = axios.create({
    baseURL: config.server
})

api.interceptors.request.use((request) => {
    const token = localStorage['token']
    
    if (token) {
        request.body.token = token
    }

    return request
})

api.interceptors.response.use((response) => {
    return response.data
})

export default api