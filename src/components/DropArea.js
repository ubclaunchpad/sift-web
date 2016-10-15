import React, {Component} from 'react';
import DropZone from 'react-dropzone';

class DropArea extends Component {
	static displayName = 'DropArea';

	state = {
		count : 0,
		files: []
	}

	onDrop (acceptedFile) {
		this.setState({
			files: acceptedFile
		});
	}

	render() {
		return (
			<div>
				<DropZone ref={node => this.dropzone = node} onDrop={this.onDrop}>
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
