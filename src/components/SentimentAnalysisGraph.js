import React, {Component} from 'react';
import {VictoryAxis, VictoryBar, VictoryChart} from 'victory';

const width = 30;
const barFontSize = 7;
const axisFontSize = 25;
export default class SentimentAnalysisGraph extends Component {
	static displayName = 'SentimentAnalysisGraph';

	static propTypes = {
		posValue: React.PropTypes.number,
		negValue: React.PropTypes.number,
		barHeight: React.PropTypes.number
	};

	static defaultProps = {
		posValue: 90,
		negValue: 10,
		barHeight: 250
	};

	render() {
		return (
			<VictoryChart domain={{y: [0, 100]}} height={this.props.barHeight}>
				<VictoryAxis
					style={{axisLabel: {fontSize: axisFontSize}}}
					tickValues={[' ', '', 'Positive', 'Negative', '', '']}
					label = "Sentiment Anaylysis Report"/>

				<VictoryBar
					animate={{velocity: 0.01}}
					labels={[this.props.posValue + '%', this.props.negValue + '%']}
					style={{
						data: {width: width},
						labels: {fontSize: barFontSize}
					}}
					data={[
						{x: 3, y: this.props.posValue},
						{x: 4, y: this.props.negValue}
					]}/>
			</VictoryChart>
		);
	}
}
