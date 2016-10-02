import Counter from './../Counter';
import Hello from './../Hello';
import React from 'react';
import {shallow} from 'enzyme';

describe('<Hello />', () => {

	it('should render a counter', () => {
		const wrapper = shallow(<Hello />);
		expect(wrapper.contains(<Counter />)).toBe(true);
	});

	it('should say hello', () => {
		const wrapper = shallow(<Hello name="Jordan" />);
		expect(wrapper.find('h1').text()).toEqual('Hello Jordan!');
	});
});
