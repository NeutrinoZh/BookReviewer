import config from '../Settings/config.js'
import api from './api.js'
import store from '../Redux/store.js'

export const signin = (email, password) => {
    api.post(config.api.signin, {
        email, password
    }).then(response => {
        console.log(response)
        //store.dispatch()
    })
}

export const signup = (data) => {
    api.post(config.api.signup, data).then((response) => {
        console.log(response)
    })
}