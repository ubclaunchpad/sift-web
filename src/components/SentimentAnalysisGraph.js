import React, { Component } from 'react';
import { VictoryAxis } from 'victory';
import { VictoryBar } from 'victory';
import { VictoryChart } from 'victory';

class SentimentAnalysisGraph extends Component {
	static displayName = 'SentimentAnalysisGraph';

	state = {
		callFunc: this.getData(),
		data: {pos_value: 90, neg_value: 10}
	};

	getData(){
		setInterval(() => {
			const rand = Math.floor(Math.random() * 100);
			this.setState({
				data:{pos_value: rand,
					neg_value: 100 - rand}
			});
		}, 2500);
	}

	render() {
		return (
			<VictoryChart domain={{y: [0, 100]}} height={220}>
				<VictoryAxis
					style={{
						axisLabel: {fontSize: 25}}}
					tickValues={[' ', '', 'Positive', 'Negative', '', '']}
					label = "Sentiment Anaylysis Report"/>

				<VictoryBar
					style={{
						data: {width: 30},
						labels: {fontSize: 7}
					}}
					animate={{velocity: 0.01}}
					padding={{top:20}}
					data={[
					{x: 3, y: this.state.data.pos_value},
					{x: 4, y: this.state.data.neg_value}
					]}
					labels={[this.state.data.pos_value + '%', this.state.data.neg_value + '%']}/>
			</VictoryChart>
		);
	}
}

export default SentimentAnalysisGraph;
