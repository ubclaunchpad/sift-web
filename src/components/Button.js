import React, {Component} from 'react';

class Button extends Component {
	static displayName = 'Button';

	state = {
		failedMessage: ''
	};

	static propTypes = {
		isDisabled: React.PropTypes.bool
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
			this.setState({failedMessage: 'Upload a file first.'});
		} else {
			// Upload file
		}
	}
}

export default Button;
