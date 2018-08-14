import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
    <Provider store={applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)}>
        <App />
    </Provider>,
    document.getElementById('app')
)