import React, {Component, PropTypes} from 'react';
import {addFile} from './../actions/ActionCreators';
import {connect} from 'react-redux';
import DropZone from 'react-dropzone';


class DropArea extends Component {
	static displayName = 'DropArea';

	static propTypes = {
		addFile: PropTypes.func
	}

	render() {
		return (
			<div className='droparea'>
				<DropZone
					className='box'
					ref={node => this.dropzone = node}
					multiple={false}
					onDrop={this.onDrop}>
					<h6>Try dropping some files here, or click to select files to upload.</h6>
					{/* this.state.files.length > 0 ? <div>
						<h2> Uploading {this.state.files.length} files...</h2>
						<div> {this.state.files.map(file => <img src={file.preview} /> )}</div>
					</div>
					: null */}
				</DropZone>
			</div>
		);
	}
	onDrop = file => this.props.addFile(file);
}

export default connect(null, dispatch => ({
	addFile: file => dispatch(addFile(file))
}))(DropArea);
