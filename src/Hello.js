// More comments in the `Counter file`
import React, {Component, PropTypes} from 'react';
// Relative imports
import Counter from './Counter';

// Export and class declaration all in one line.
// This is the idiomatic way to declare components.
export default class Hello extends Component {
	static displayName = 'Hello';

	// propTypes declare what sort of `props` are expected as input
	// from parent components. The `PropTypes` package declares a
	// number of useful type checking functions like `PropTypes.string`
	static propTypes = {
		name: PropTypes.string
	};

	// defaultProps are used if no props are given from the parent component.
	static defaultProps = {
		name: 'John Appleseed'
	};

	render () {
		// Here we instantiate an instance of our Counter as a child component.
		return (
			<div>
				<h1>Hello {this.props.name}!</h1>
				<p>Welcome to React. Here's a counter.</p>
				<Counter />
			</div>
		);
	}
}
