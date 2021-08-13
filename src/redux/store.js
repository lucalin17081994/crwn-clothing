import {createStore,applyMiddleware}from 'redux'
//add middleware so every action can be caught and displayed
import logger from 'redux-logger'//logger
import rootReducer from './root-reducer'

const middlewares = [logger]
const store=
  createStore(
    rootReducer, 
    applyMiddleware(...middlewares)
  )

export default store
