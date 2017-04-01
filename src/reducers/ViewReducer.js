import ActionTypes from '../actions/ActionTypes'
import ViewTypes from '../actions/ViewTypes'

const initialState = {
	viewState : ViewTypes.RESULTS
}

export default function resultsReducer (state = initialState, action) {
	//console.log("VIEW");
	switch(action.type) {
		case ActionTypes.UPLOAD_SUCCESS:
			state.viewState = ViewTypes.RESULTS;
			return state;
		case ActionTypes.UPLOAD_ERROR:
			console.log("ERROR HERE!");
			state.viewState = ViewTypes.FORM;
			return state;
		default:
			return state;
	}
}
