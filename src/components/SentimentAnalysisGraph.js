import React, {Component} from 'react';
import {VictoryAxis, VictoryBar, VictoryChart} from 'victory';

const totalValue = 100;
const durationValue = 2000;
export default class SentimentAnalysisGraph extends Component {
	static displayName = 'SentimentAnalysisGraph';

	static propTypes = {
		posValue: React.PropTypes.number,
		width: React.PropTypes.number,
		isAnimated: React.PropTypes.bool
	};

	static defaultProps = {
		posValue: 68,
		width: 30,
		isAnimated: false
	};

	render() {
		const message = `Feedback is ${this.props.posValue}% positive.`;
		return (
			<VictoryChart domain={{y: [0, 100]}}>
				<VictoryAxis
					label={message}
					style={{
						axis: {stroke: 'none'},
						tickLabels: {fill: 'none'},
						axisLabel: {fontSize: 10, padding: 15}
					}}/>
				<VictoryBar
					horizontal
					style={{
						data: {width: this.props.width}
					}}
					data={[
						{x: 1, y: totalValue, fill: 'darkred'}
					]}/>
				<VictoryBar
					animate={{velocity: 0.1,
						onLoad:{duration: this.props.isAnimated ? durationValue : 0}}}
					horizontal
					style={{
						data: {width: this.props.width}
					}}
					data={[
						{x: 1, y: this.props.posValue, fill: 'green'}
					]}/>
			</VictoryChart>
		)
	}
}
