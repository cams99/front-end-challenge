import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'
import './index.css'

import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'

const initialState = {}

const composeEnhancers = compose(
  applyMiddleware(reduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(reducers, initialState, composeEnhancers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
