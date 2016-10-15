import React, {Component} from 'react';

class Button extends Component {

	static displayName = 'Button';

	static propTypes = {
		isDisabled: PropTypes.bool
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
		if (this.PropTypes.isDisabled){
			console.log('Upload a file first');
		} else {
			// Upload file
		}
	}
}

export default Button;
export {Button};
