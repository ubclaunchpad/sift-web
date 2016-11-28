import ActionTypes from '../actions/ActionTypes'
import ViewTypes from '../actions/ViewTypes'

const initialState = {
	viewState : ViewTypes.RESULTS
}

export default function resultsReducer (state = initialState, action) {
	switch(action.type) {
		case ActionTypes.UPLOAD_SUCCESS:
			state.viewState = ViewTypes.RESULTS;
			return state;
		case ActionTypes.UPLOAD_ERROR:
			state.viewState = ViewTypes.FORM;
			return state;
		default:
			return state;
	}
}
