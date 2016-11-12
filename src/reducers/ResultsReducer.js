import ActionTypes from '../actions/ActionTypes'

const viewTypes = {
	form : 'form',
	processing : 'processing',
	results : 'results'
}

const initialState = {
	viewState : viewTypes.results
}


export default function resultsReducer (state = initialState, action) {
	switch(action.type) {
		case ActionTypes.UPLOAD_SUCCESS:
			state.viewState = viewTypes.results;
			return state;
		case ActionTypes.UPLOAD_ERROR:
			state.viewState = viewTypes.form;
			return state;
		default:
			return state;
	}
}
