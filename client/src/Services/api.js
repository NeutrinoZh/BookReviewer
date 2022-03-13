import axios from 'axios'
import config from '../Settings/config.js'
import store from '../Redux/store.js'
import { logout } from '../Redux/actionMaker.js'

export const api = axios.create({
    baseURL: config.server
})

api.interceptors.request.use(request => {
    const token = store.getState()?.user?.token
    
    if (token) {
        request.data.token = token
    }

    return request
})

api.interceptors.response.use(response => {
    return response.data
})

export const isAuth = (request) => {
    return request.catch(error => {
        if (error?.request?.status == 401) {
            store.dispatch(logout())
        }
    })
}