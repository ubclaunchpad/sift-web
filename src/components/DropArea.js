import React, {Component} from 'react';
import DropZone from 'react-dropzone';
import request from 'superagent'
// import {JSZip} from 'jszip';
// stubbed jszip for time being until implemented.

class DropArea extends Component {
	static displayName = 'DropArea';

	state = {
		count : 0,
		files: []
	}

	onDrop (acceptedFiles) {
		console.log("Beginning to send accepted file to feedback!");
		this.setState({
			files: acceptedFiles
		});
		const req = request.post('/feedback');
		acceptedFiles.forEach( file => {
			console.log("Sent :" + file);
			req.attach(file.name, file);
		});
		req.end( err => {
			if (err){
				throw err;
			}
		});
	}
	render() {
		return (
			<div>
				<DropZone
					ref={node => this.dropzone = node}
					onDrop={this.onDrop}>
					multiple = true
					<div>Try dropping some files here, or click to select files to upload.</div>
					<button type="button" onClick={this.onOpenClick}>
						Open Dropzone
					</button>
					{this.state.files.length > 0 ? <div>
						<h2> Uploading {this.state.files.length} files...</h2>
						<div> {this.state.files.map(file => <img src={file.preview} /> )}</div>
					</div>
					: null}
				</DropZone>
			</div>
		);
	}
}

export default DropArea;
