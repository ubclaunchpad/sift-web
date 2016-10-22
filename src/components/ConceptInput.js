import React, {Component} from 'react';

class ConceptInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newID: 0,
			tokens: [],
			inputValue: ''
		}
		this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.deleteToken = this.deleteToken.bind(this);
	}

	handleOnKeyPress(e) {
		if (e.key === 'Enter' && this.state.inputValue !== '') {
			this.setState({newID: this.state.newID + 1});
			this.setState({tokens: this.state.tokens.concat({id: this.state.newID,
							name: this.state.inputValue}),
				inputValue: ''});
		}
	}

	handleOnChange(e) {
		this.setState({inputValue: e.target.value});
	}

	deleteToken(token){
		const newState = this.state.tokens;
		if (newState.indexOf(token) > -1) {
			newState.splice(newState.indexOf(token), 1);
			this.setState({tokens: newState})
		}
	}

	render() {
		const listItem = this.state.tokens.map(token =>
			(
				<div key={token.id}>
					<input type="button" value={token.name} disabled="true"/>
					<button onClick={this.deleteToken.bind(this, token)}>deleteToken</button>
				</div>
			)
		)
		return (
			<div>
				<input
					type="text"
					value={this.state.inputValue}
					onKeyPress={this.handleOnKeyPress}
					onChange={this.handleOnChange}/>
				{listItem}
			</div>
		);
	}
}
export default ConceptInput;
