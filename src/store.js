import combineReducers from './reducers/CombinedReducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';



export default createStore(
	combineReducers,
	applyMiddleware(thunk)
)
