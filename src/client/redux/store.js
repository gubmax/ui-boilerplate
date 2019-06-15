/* eslint-disable no-underscore-dangle */
import { createStore, compose } from 'redux'
import rootReducer from './reducers'

const enhancer = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : compose

export default createStore(rootReducer, enhancer)
