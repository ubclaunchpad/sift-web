import ActionTypes from '../actions/ActionTypes'

const initialState = {
	files : []
}

const formUploadReducer = (state = initialState, action) => {
	switch(action.type) {
		case ActionTypes.ADD_FILE:
			state.files.append(action.payload.file);
			return state;
		default:
			return state;
	}
}

export default formUploadReducer;
