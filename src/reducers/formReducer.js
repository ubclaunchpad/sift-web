import ActionTypes from '../actions/ActionTypes'

const initialState = {
	files: []
}

const FormReducer = (state = initialState, action) => {
	switch(action.type) {
		case ActionTypes.ADD_FILE:
			state.files.push(action.payload.file);
			console.log('Hey!');
			return state;
		default:
			console.log('Hey Default!');
			return state;
	}
}

export default FormReducer;
