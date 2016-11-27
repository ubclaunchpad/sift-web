import React, {Component, PropTypes} from 'react';
import {addFile} from './../actions/ActionCreators';
import {connect} from 'react-redux';
import DropZone from 'react-dropzone';


class DropArea extends Component {
	static displayName = 'DropArea';

	static propTypes = {
		addFile: PropTypes.func
	}

	onDrop (acceptedFiles) {
		this.props.addFile(acceptedFiles[0])
	}

	render() {
		return (
			<div>
				<DropZone
					ref={node => this.dropzone = node}
					multiple = {true}
					onDrop={this.onDrop}>
					<div>Try dropping some files here, or click to select files to upload.</div>
					<button type="button" onClick={this.onOpenClick}>
						Open Dropzone
					</button>
					{/*this.state.files.length > 0 ? <div>
						<h2> Uploading {this.state.files.length} files...</h2>
						<div> {this.state.files.map(file => <img src={file.preview} /> )}</div>
					</div>
					: null*/}
				</DropZone>
			</div>
		);
	}
}

export default connect(null, dispatch => {
	return {
		addFile: file => dispatch(addFile(file))
	};
})(DropArea);
