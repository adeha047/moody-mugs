import { createStore, createReducers, applyMiddleware } from 'react'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer } from './reducers/productReducers'
import { middleware } from 'yargs'

const reducer = combineReducers({
    productList: productListReducer
})

const initialState = {}

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store