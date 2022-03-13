import actions from "./actions";

export const book = (state={}, action) => {
    switch (action.type) {
        case actions.ADD_BOOK:
            return {
                id: action.id,
                title: action.title,
                text: action.text,
                image: action.image,
                author: action.author
            }
        case actions.EDIT_BOOK:
            return (state.id !== action.id) ? state : {
                title: action.title,
                text: action.text,
                image: action.image
            }
        default:
            return state
    }
}

export const books = (state=[], action) => {
    switch (action.type) {
        case actions.ADD_BOOK:
            return [
                ...state,
                book({}, action)
            ]
        case actions.EDIT_BOOK:
            return state.map(
                item => book(item, action)
            )
        case actions.REMOVE_BOOK:
            return state.filter(
                item => item.id !== action.id
            )
        default:
            return state
    }
}

export const user = (state={}, action) => {
    switch (action.type) {
        case actions.LOGIN:
            return {
                name: action.name, 
                email: action.email,
                aboutMe: action.aboutMe,
                followers: action.followers,
                num_books: action.num_books,
                num_following: action.num_following,
                num_comments: action.num_comments,
                num_favorite: action.num_favorite,
                token: action.token,
                avatar: action.avatar
            }
        case actions.LOGOUT: 
            return {}
        default:
            return state
    }
}