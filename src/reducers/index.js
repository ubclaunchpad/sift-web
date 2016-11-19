import { combineReducers } from 'redux'

import fileProcessing from './FileProcessingReducer'
import fileUpload from './FileUploadReducer'
import results from './ResultsReducer'

export default combineReducers({
	fileProcessing,
	fileUpload,
	results
})
