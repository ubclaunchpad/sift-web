/**
* Created by alekhrycaiko on 2016-11-19.
*/
/*
* action types
*/
import actions from './ActionTypes';
import store from '../store';


const url = 'http://localhost:9090/';

export function startUpload(){
	return { type : actions.UPLOAD_START};
}

export function successfulUpload(response) {
	return { type : actions.UPLOAD_SUCCESS};
}

export function errorUploading() {
	return { type : actions.UPLOAD_ERROR};
}

export function addFile(file) {
	return { type : actions.ADD_FILE,
		payload : {
			file
		}
	};
}

export function uploadForm() {
	return function(dispatch) {
		// Need to have state at this point to access file and upload to server
		// Dispatch upload to upload view
		const file = new FormData();
		file.append('feedback', store.getState().form.files[0][0]);
		fetch('http://localhost:9090/feedback', {
			method: 'POST',
			body: file
		})
		dispatch(startUpload(store.getState().form.files[0][0]));
	}
}
