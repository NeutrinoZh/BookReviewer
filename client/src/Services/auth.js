import config from '../Settings/config.js'
import { api } from './api.js'
import store from '../Redux/store.js'
import { login } from '../Redux/actionMaker.js'

export const signin = (email, password, callback, error) => {
    api.post(config.api.signin, {
        email, password
    }).then(response => {
        if (response.error) error(response.error)
        else {
            store.dispatch(login(response))
            callback()
        }
    })
}

export const signup = (data, callback, error) => {
    api.post(config.api.signup, data).then(response => {
        if (response.error) error(response.error)
        else callback()
    })
}

export const password_reset = (email, callback, error) => {
    api.post(config.api.password_reset, { email }).then(response => {
        if (response.error) error(response.error)
        else callback()
    })
}

export const new_password = (password, repassword, id, callback, error) => {
    api.post(config.api.new_password.replace(':id', id), { password, repassword }).then(response => {
        if (response.error) error(response.error)
        else callback()
    })
}