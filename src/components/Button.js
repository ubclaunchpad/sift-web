import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {store} from '../store';
import {uploadForm} from './../actions/ActionCreators';

class Button extends Component {
	static displayName = 'Button';

	state = {
		failedMessage: ''
	};

	static propTypes = {
		isDisabled: React.PropTypes.bool,
		uploadForm: PropTypes.func
	};

	static defaultProps = {
		isDisabled: false
	};

	render() {
		return (
			<div>
				<p>Testing</p>
				{this.props.isDisabled ? <p>{this.state.failedMessage}</p> : null}
				<button onClick={this._onClick}>
					Submit File
				</button>
			</div>
		);
	}

	_onClick = () => {
		if (this.props.isDisabled){
			console.log('FAILED!');
			this.setState({failedMessage: 'Upload a file first.'});
		} else {
			// Upload file
			this.props.uploadForm();
		}
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		files: state.form.files
	}
}

const mapDispatchToProps = (dispatch, state) => {
	console.log(state);
	return {
		uploadForm: state => {
			dispatch(uploadForm(state))
		}
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
	/*
	return {
		dispatch => {uploadForm: state => dispatch(uploadForm(state))}
	}*/
)(Button);
