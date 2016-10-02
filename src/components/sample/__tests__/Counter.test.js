import Counter from './../Counter';
import React from 'react';
import {shallow} from 'enzyme';

describe('<Counter />', () => {

	it('should render a button', () => {
		const wrapper = shallow(<Counter />);
		expect(wrapper.find('button').length).toEqual(1);
	});

	it('should render a p', () => {
		const wrapper = shallow(<Counter />);
		expect(wrapper.find('p').length).toEqual(1);
	});

	it('should incrememt the count when clicked', () => {
		const wrapper = shallow(<Counter />);
		const button = wrapper.find('button');
		button.simulate('click');
		expect(wrapper.state('count')).toEqual(1);

		for (let i = 0; i < 10; i++) {
			button.simulate('click');
		}
		expect(wrapper.state('count')).toEqual(11);
	});
});
