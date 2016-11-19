import ActionTypes from '../actions/ActionTypes'
import ViewEnum from '../actions/ViewEnum'

const initialState = {
	viewState : ViewEnum.RESULTS
}

export default function resultsReducer (state = initialState, action) {
	switch(action.type) {
		case ActionTypes.UPLOAD_SUCCESS:
			state.viewState = ViewEnum.RESULTS;
			return state;
		case ActionTypes.UPLOAD_ERROR:
			state.viewState = ViewEnum.FORM;
			return state;
		default:
			return state;
	}
}
