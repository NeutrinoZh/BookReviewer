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
                image: response.image,
                author: response.user,
                _id: response.id
            }))
            
            callback()
        }
    }))
}

export const deleteBookServie = (id, callback) => {
    isAuth(api.post(config.api.delete_book.replace(':id', id), {})
      .then(callback)
      .catch(error => {
        const msg = "DeleteBookService Error:" + error
        console.log(msg)
      }
    ))
}

export const likeBookService = (id, callback) => {
    isAuth(api.post(config.api.like_book.replace(':id', id), {}).then(response => {
        callback(response)
    }).catch(error => {
        const msg = "LikeBookService Error:" + error
        console.log(msg)
    }))
}

export const loadBooksService = (callback) => {
    isAuth(api.post(config.api.load_books, {}).then(response => {
        callback(response)
    }).catch(error => {
        const msg = "LoadBooksService Error:" + error
        console.log(msg)
    }))
}