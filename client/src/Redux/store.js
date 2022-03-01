import {
    createStore,
    combineReducers
} from 'redux'
import {
    books, user
} from './reducers'

const initialState = {
    books: []
}

const store = createStore(
    combineReducers({
        user,
        books 
    }),
    localStorage['redux-store-book-reviewer'] ?
        JSON.parse(localStorage['redux-store-book-reviewer']) :
        initialState
)

store.subscribe(() => {
    localStorage['redux-store-book-reviewer'] = JSON.stringify(store.getState())
})

export default store