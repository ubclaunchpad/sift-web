import ConceptInput from './../ConceptInput';
import React from 'react';
import {shallow} from 'enzyme';

describe('<ConceptInput />', () => {
	it('Should add a token under the textbox', () => {
		const wrapper = shallow(<ConceptInput />);
		const input = wrapper.find('input');
		input.simulate('change', {target: {value: 'giraffe'}});
		input.simulate('keypress', {key: 'Enter'});
		expect(wrapper.state('tokens')[0].name).toEqual('giraffe');
	});
	it('Should remove the selected token', () => {
		const wrapper = shallow(<ConceptInput />);
		const input = wrapper.find('input');
		input.simulate('change', {target: {value: 'giraffe'}});
		input.simulate('keypress', {key: 'Enter'});
		const button = wrapper.find('button');
		button.simulate('click');
		expect(wrapper.state('tokens').length).toEqual(0);
	});
});
