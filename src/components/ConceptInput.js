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
    this.delete = this.delete.bind(this);
  }

	handleOnKeyPress(e) {
		if (e.key === 'Enter' && this.state.inputValue != '') {
			console.log('Enter pressed');
			this.setState({newID: this.state.newID + 1});
			this.setState({tokens: this.state.tokens.concat({id: this.state.newID, name: this.state.inputValue}),
						   inputValue: ''}); 
		}
	}

	handleOnChange(e) {
		this.setState({inputValue: e.target.value}); 
	}

	delete(item){
		console.log("Deleted " + item.name);
		const newState = this.state.tokens;
    	if (newState.indexOf(item) > -1) {
      		newState.splice(newState.indexOf(item), 1);
      		this.setState({tokens: newState})
    	}
	}

	render() {
		const listItem = this.state.tokens.map((item)=>{
        	return (
	        	<div key={item.id}>
	        		<input type="button" value={item.name} disabled='true'/><button onClick={this.delete.bind(this, item)}>Delete</button>
	      		</div>
	      	)
   		})
		return (
			<div>
			<input 
	    		type="text" 
		    	value={this.state.inputValue} 
		    	onKeyPress={this.handleOnKeyPress} 
		    	onChange={this.handleOnChange}
	    	/>
	    	{listItem}
	    	</div>
	    );
	}
}

export default ConceptInput;
