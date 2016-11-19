import combineReducers from './reducers/CombinedReducers'
import { createStore } from 'redux'



export default createStore(combineReducers)
