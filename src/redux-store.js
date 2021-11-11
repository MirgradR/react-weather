import { applyMiddleware, createStore } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { getDate } from './redux/dateReducer'
import { weatherReducer } from './redux/weatherReducer'

let reducers = combineReducers({
    weather: weatherReducer,
    date: getDate
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store