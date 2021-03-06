import DropArea from './../DropArea';
import React from 'react';
import {shallow} from 'enzyme';

describe('<DropArea />', () => {

	it('should render DropArea', () => {
		const wrapper = shallow(<DropArea/>);
		expect(wrapper.find('Dropzone').length).toEqual(1);
	});
	it('has multiple file uploads set', () => {
		const wrapper = shallow(<DropArea/>);
		expect(wrapper.props().children.props.multiple).toEqual(true);
	});
});
