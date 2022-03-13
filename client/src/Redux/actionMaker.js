import actions from "./actions";

export const addBook = (book) => ({
    type: actions.ADD_BOOK,
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