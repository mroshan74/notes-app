import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import App from './components/general/App'
import configureStore from './redux/store/configureStore'
import { startAccount } from './redux/actions/loginsAction'
import { startCategory } from './redux/actions/categoriesAction'
import { startNote } from './redux/actions/notesAction'

const store = configureStore()

if(localStorage.getItem('token')){
    store.dispatch(startAccount())
    store.dispatch(startCategory())
    store.dispatch(startNote())
}

store.subscribe(() => {
    console.log(store.getState())
})

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('root'))