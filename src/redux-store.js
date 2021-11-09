import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { searchReducer } from './redux/searchReducer'
import { weatherReducer } from './redux/weatherReducer'

let reducers = combineReducers({
    search: searchReducer,
    weather: weatherReducer
})



let store = createStore(reducers)

window.store = store

export default store