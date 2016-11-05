import React from 'react';
import SentimentAnalysisGraph from './../SentimentAnalysisGraph';
import {shallow} from 'enzyme';

describe('<SentimentAnalysisGraph />', () => {
	it('Sum of positive value and negative value should be 100 with provided props', () => {
		const wrapper = shallow(<SentimentAnalysisGraph posValue={60} negValue={40}/>);
		const posValue = wrapper.node.props.children[1].props.data[0].y;
		const negValue = wrapper.node.props.children[1].props.data[1].y;
		expect(posValue + negValue).toEqual(100);
	});

	it('Default positive value and negative value shoule be 90 and 10 respectively', () => {
		const wrapper = shallow(<SentimentAnalysisGraph />);
		const posValue = wrapper.node.props.children[1].props.data[0].y;
		const negValue = wrapper.node.props.children[1].props.data[1].y;
		expect(posValue).toEqual(90);
		expect(negValue).toEqual(10);
	});

	it('Default bar height should be 250', () => {
		const wrapper = shallow(<SentimentAnalysisGraph />);
		const barHeight = wrapper.node.props.height;
		expect(barHeight).toEqual(250);
	});

	it('Bar height should be 350 with provided prop barHeight = 350', () => {
		const wrapper = shallow(<SentimentAnalysisGraph barHeight={350}/>);
		const barHeight = wrapper.node.props.height;
		expect(barHeight).toEqual(350);
	});
});
