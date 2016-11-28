import ActionTypes from '../actions/ActionTypes'

const initialState = {
	files: []
}

const FormReducer = (state = initialState, action) => {
	switch(action.type) {
		case ActionTypes.ADD_FILE:
			state.files.push(action.payload.file);
			return state;
		default:
			return state;
	}
}

export default FormReducer;
