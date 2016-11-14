import React, {Component} from 'react';
import {VictoryAxis, VictoryBar, VictoryChart} from 'victory';

const totalValue = 100;
export default class SentimentAnalysisGraph extends Component {
	static displayName = 'SentimentAnalysisGraph';

	static propTypes = {
		posValue: React.PropTypes.number
	};

	static defaultProps = {
		posValue: 68
	};

	render(){
		const message = 'Feedback is ' + this.props.posValue + '% positive.';
		return(
			<VictoryChart domain={{y: [0, 100]}}>
				<VictoryAxis
					label={message}
					style={{
						axis: {stroke: 'none'},
						tickLabels: {fill: 'none'},
						axisLabel: {fontSize: 10, padding: 15}
					}}/>
				<VictoryBar
					animate={{velocity: 0.1}}
					horizontal
					style={{
						data: {width: 30}
					}}
					data={[
						{x: 1, y: totalValue, fill: 'darkred'},
						{x: 1, y: this.props.posValue, fill: 'green'}
					]}/>
			</VictoryChart>
		)
	}
}
