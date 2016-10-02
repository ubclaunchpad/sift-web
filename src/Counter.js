// ES6 import syntax.
import React, {Component} from 'react';

// All React components should be created this way, by extending the
// basic React component class.
class Counter extends Component {
	// `displayName` is how the component will show up in the React dev tools.
	static displayName = 'Counter';

	// React components use "state" to manage local state that
	// stays within a component.
	// This count variable is accessible via `this.state`
	state = {
		count: 0
	};

	render () {
		// Using JSX to render HTML to the DOM
		// The DOM will auto-update the visible count whenever our state changes.
		// We add an onClick handler function to the button for incrememting count.
		return (
			<div>
				<p>{this.state.count}</p>
				<button onClick={this._onClick}>
					Increase
				</button>
			</div>
		);
	}

	// Handles updating the state of the component when the button is clicked.
	_onClick = () => {
		// NEVER modify `this.state` directly. Always use `this.setState` instead.
		this.setState({
			count: this.state.count + 1
		});
	};
}

// Export as default so it can be imported with `import Counter from './Counter'`
export default Counter;
// You can also export secondary named modules, for instance:
export {Counter};
// That way it can be imported as `import {Counter} from './Counter'`
