import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import fileProcessing from './FileProcessingReducer'
//import form from './FormReducer'
import { reducer as formReducer } from 'redux-form'
//import view from './ViewReducer'

export default combineReducers({
	routing: routerReducer,
	fileProcessing,
	form: formReducer
})
