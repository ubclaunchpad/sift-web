import React, {Component} from 'react';

class ConceptInput extends Component {
	static displayName = 'ConceptInput';

	state = {
		tokens: [],
		inputValue: ''
	}

	_handleOnKeyPress = e => {
		if (e.key === 'Enter' && this.state.inputValue !== '') {
			this.setState({
				tokens: [...this.state.tokens, this.state.inputValue],
				inputValue: ''
			});
		}
	}

	_handleOnChange = e => {
		this.setState({inputValue: e.target.value});
	}

	_deleteToken = tokenIndex => {
		const newTokens = this.state.tokens;
		newTokens.splice(tokenIndex, 1);
		this.setState({tokens: newTokens})
	}

	render() {
		const tokens = this.state.tokens.map((token, index) => (
			<div key={index}>
				{token}
				<button onClick={() => this._deleteToken(index)}>Delete Token</button>
			</div>
			)
		);
		return (
			<div>
				<input
					type="text"
					value={this.state.inputValue}
					onKeyPress={this._handleOnKeyPress}
					onChange={this._handleOnChange}/>
				{tokens}
			</div>
		);
	}
}
export default ConceptInput;
