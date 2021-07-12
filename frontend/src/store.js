import { createStore, createReducers, applyMiddleware } from 'react'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialState = {}

const store = createStore(reducer, initalState)