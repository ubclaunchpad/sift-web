import React, {Component} from 'react';

class Button extends Component {

	static displayName = 'Button';

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
				<button onClick={this._onClick}>
					Submit File
				</button>
			</div>
		);
	}

	_onClick = () => {
		if (this.propTypes.isDisabled){
			<div>
				<p>Upload a file first.</p>
			</div>
		} else {
			// Upload file
		}
	}
}

export default Button;
export {Button};
