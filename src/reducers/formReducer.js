import ActionTypes from '../actions/ActionTypes'

const initialState = {
	files: []
}

const FormReducer = (state = initialState, action) => {
	//console.log("FORM!");
	switch(action.type) {
		case ActionTypes.ADD_FILE:
			console.log("Push file onto payload!");
			state.files.push(action.payload.file);
			return state;
		default:
			return state;
	}
}

export default FormReducer;
