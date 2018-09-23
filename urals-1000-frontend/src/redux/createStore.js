import { createStore as baseCreateStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import axiosMiddleware from 'redux-axios-middleware'
import * as reducers from './reducers'
import { createClient } from '../axios-client'

export const createStore = () => {
  const axiosClient = createClient()
  const middleware = [
    thunk,
    promise,
    axiosMiddleware(axiosClient)
  ]
  const enhancer = composeWithDevTools(applyMiddleware(...middleware))
  const reducer = combineReducers(reducers)
  const store = baseCreateStore(reducer, {}, enhancer)
  return store
}
