import React, {Component} from 'react';

class ConceptInput extends Component {
	static displayName = 'ConceptInput';

	state = {
		tokens: [],
		inputValue: ''
	}

	handleOnKeyPress(e) {
		if (e.key === 'Enter' && this.state.inputValue !== '') {
			this.setState({
				tokens: [...this.state.tokens, this.state.inputValue],
				inputValue: ''
			});
		}
	}

	handleOnChange(e) {
		this.setState({inputValue: e.target.value});
	}

	deleteToken(tokenIndex){
		const newState = this.state.tokens;
		newState.splice(tokenIndex, 1);
		this.setState({tokens: newState})
	}

	render() {
		const listItem = this.state.tokens.map((token, index) =>
			(
				<div key={index}>
					{token}
					<button onClick={index => this.deleteToken(index)}>Delete Token</button>
				</div>
			)
		)
		return (
			<div>
				<input
					type="text"
					value={this.state.inputValue}
					onKeyPress={this.handleOnKeyPress.bind(this)}
					onChange={this.handleOnChange.bind(this)}/>
				{listItem}
			</div>
		);
	}
}
export default ConceptInput;
