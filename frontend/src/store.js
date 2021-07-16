import { createStore, createReducers, applyMiddleware } from 'react'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { middleware } from 'yargs'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store