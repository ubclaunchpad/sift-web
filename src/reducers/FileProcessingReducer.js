import ActionTypes from '../actions/ActionTypes'
import viewTypes from '../actions/ViewTypes'
/*
const viewTypes = {
	form : 'form',
	processing : 'processing',
	results : 'results'
}
*/

const initialState = {
	viewState : viewTypes.form
}

export default function fileProcessingReducer(state = initialState, action){
	//console.log("File!");
	switch(action.type) {
		case ActionTypes.UPLOAD_START:
			console.log("Upload Start");
			state.viewState = viewTypes.PROCESSING;
			return state;
		case ActionTypes.UPLOAD_SUCCESS:
			state.viewState = viewTypes.RESULTS;
			return state;
		case ActionTypes.UPLOAD_ERROR:
			state.viewState = viewTypes.FORM;
			return state;
		default:
			return state;
	}
}
