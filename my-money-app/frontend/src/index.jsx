import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'

import reducers from './main/reducers'

ReactDOM.render(
    <Provider store={applyMiddleware(promise)(createStore)(reducers)}>
        <App />
    </Provider>,
    document.getElementById('app')
)