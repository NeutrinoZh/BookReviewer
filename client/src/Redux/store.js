import {
    createStore,
    combineReducers
} from 'redux'
import {
    books, user
} from './reducers'

const initialState = {
    user: {},
    books: []
}

function getReduxState(key='redux-store-book-reviewer') {
    try {
        if (localStorage[key])
            return JSON.parse(localStorage[key])
    } catch (e) {}

    return initialState
}

const store = createStore(
    combineReducers({
        user,
        books 
    }), getReduxState()
)

store.subscribe(() => {
    localStorage['redux-store-book-reviewer'] = JSON.stringify(store.getState())
})

export default store