import React from 'react';
import SentimentAnalysisGraph from './../SentimentAnalysisGraph';
import {shallow} from 'enzyme';

describe('<SentimentAnalysisGraph />', () => {
	it('should have a positive value of 68 by default', () => {
		const wrapper = shallow(<SentimentAnalysisGraph />);
		const posValue = wrapper.node.props.children[2].props.data[0].y;
		expect(posValue).toEqual(68);
	});

	it('should have a positive value of 90 with provided props', () => {
		const wrapper = shallow(<SentimentAnalysisGraph posValue={90}/>);
		const posValue = wrapper.node.props.children[2].props.data[0].y;
		expect(posValue).toEqual(90);
	});

	it('should always have a total value of 100', () => {
		const wrapper = shallow(<SentimentAnalysisGraph />);
		const totalValue = wrapper.node.props.children[1].props.data[0].y;
		expect(totalValue).toEqual(100);
	});

	it('should have a bar width of 30 by default', () => {
		const wrapper = shallow(<SentimentAnalysisGraph />);
		const width = wrapper.node.props.children[2].props.style.data.width;
		expect(width).toEqual(30);
	});

	it('should have a bar width of 70 with provided props', () => {
		const wrapper = shallow(<SentimentAnalysisGraph width={70} />);
		const width = wrapper.node.props.children[2].props.style.data.width;
		expect(width).toEqual(70);
	});

	it('should not add any animation to the bar by default', () => {
		const wrapper = shallow(<SentimentAnalysisGraph />);
		const durationValue = wrapper.node.props.children[2].props.animate.onLoad.duration;
		expect(durationValue).toEqual(0);
	});

	it('should add animation to the bar with duration of 2000', () => {
		const wrapper = shallow(<SentimentAnalysisGraph isAnimated={true} />);
		const durationValue = wrapper.node.props.children[2].props.animate.onLoad.duration;
		expect(durationValue).toEqual(2000);
	});
});
