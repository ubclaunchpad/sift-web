import Button from './../ButtonZ';
import React from 'react';
import {shallow} from 'enzyme';

describe('<Button />', () => {
	it('Should render a button', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.find('button').length).toEqual(1);
	});

	it('should render a p', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.find('p').length).toEqual(1);
	});
});
