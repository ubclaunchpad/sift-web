import React from 'react';
import SentimentAnalysisGraph from './../SentimentAnalysisGraph';
import {shallow} from 'enzyme';

describe('<SentimentAnalysisGraph />', () => {
	it('should have a positive value of 68 as a default', () => {
		const wrapper = shallow(<SentimentAnalysisGraph />);
		const posValue = wrapper.node.props.children[1].props.data[1].y;
		expect(posValue).toEqual(68);
	});

	it('should have a positive value of 90', () => {
		const wrapper = shallow(<SentimentAnalysisGraph posValue={90}/>);
		const posValue = wrapper.node.props.children[1].props.data[1].y;
		expect(posValue).toEqual(90);
	});

	it('should always have a total value of 100', () => {
		const wrapper = shallow(<SentimentAnalysisGraph />);
		const totalValue = wrapper.node.props.children[1].props.data[0].y;
		expect(totalValue).toEqual(100);
	});
});
