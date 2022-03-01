import actions from "./actions";
import { v4 } from 'uuid'

export const addBook = (book) => ({
    type: actions.ADD_BOOK,
    id: v4(),
    ...book
})

export const editBook = (id, book) => ({
    type: actions.EDIT_BOOK,
    ...book
})

export const removeBook = (id) => ({
    type: actions.REMOVE_BOOK,
    id
})

export const login = (user) => ({
    type: actions.LOGIN,
    ...user
})

export const logout = () => ({
    type: actions.LOGOUT
})