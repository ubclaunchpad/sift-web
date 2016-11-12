import ActionTypes from '../actions/ActionTypes'

const initialState = {
	files : []
}

const formUploadReducer = (state = initialState, action) => {
	switch(action.type) {
		case ActionTypes.ADD_FILE:
			state.files.append(action.payload.file);
			return state;
		case ActionTypes.UPLOAD_SUCCESS:
			return state;
		case ActionTypes.UPLOAD_ERROR:
			return state;
		default:
			return state;
	}
}

export default formUploadReducer;
