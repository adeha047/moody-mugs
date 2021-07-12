import { createStore, createReducers, applyMiddleware } from 'react'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { middleware } from 'yargs'

const reducer = combineReducers({})

const initialState = {}

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware([...middleware])))

export default store