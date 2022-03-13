import config from '../Settings/config.js'
import { api, isAuth } from './api.js'

import store from '../Redux/store.js'
import { addBook } from '../Redux/actionMaker.js'

export const addBookService = (title, image, text, callback, error) => {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('image', image)
    formData.append('text', text)
    formData.append('token', store.getState().user.token)

    isAuth(api.post(config.api.add_book, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        if (response.error) error(response.error)
        else {
            store.dispatch(addBook({
                title: title,
                text: text,
                image: image,
                id: response.id
            }))
            
            callback()
        }
    }))
}