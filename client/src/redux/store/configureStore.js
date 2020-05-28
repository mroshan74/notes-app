import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import loginReducer from '../reducers/loginReducer'
import notesReducer from '../reducers/notesReducer'
import categoriesReducer from '../reducers/categoriesReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
        login: loginReducer,
        notes: notesReducer,
        categories: categoriesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore