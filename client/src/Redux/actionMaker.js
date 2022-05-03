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

export const load_books = (books) => ({
    type: actions.LOAD_BOOKS,
    books: books
})

export const getElementByID = (array, id) => {
    for (let i = 0; i < array.length; ++i)
        if (array[i]._id == id)
            return array[i]
    return null
}