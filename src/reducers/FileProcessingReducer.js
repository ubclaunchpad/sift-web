import ActionTypes from '../actions/ActionTypes'

const viewTypes = {
	form : 'form',
	processing : 'processing',
	results : 'results'
}

const initialState = {
	viewState : viewTypes.form
}

export default function fileProcessingReducer(state = initialState, action){
	switch(action.type) {
		case ActionTypes.UPLOAD:
			state.viewState = viewTypes.processing;
			return state;
		default:
			return state;
	}
}
