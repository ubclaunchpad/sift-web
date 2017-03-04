import { combineReducers } from 'redux'

import fileProcessing from './FileProcessingReducer'
import form from './FormReducer'
//import view from './ViewReducer'

export default combineReducers({
	fileProcessing,
	form
})
