/**
 * Created by alekhrycaiko on 2016-11-19.
 */
/*
 * action types
 */
import actions from './ActionTypes';
import request from 'superagent';


const url = 'http://localhost:9090';

export function startUpload(){
    return { type : actions.UPLOAD_START};
}

//TODO: handle response.
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

export function uploadForm(file) {
  startUpload();
  request.post(url + '/feedback');
	req.attach(file.name, file);
	req.end( (err, res) => {
		if (err){
      errorUploading();
		}
    else{
      successfulUpload(res);
      console.log(res);

    }
	});
}
