import DropArea from './../DropArea';
import React from 'react';
import {shallow} from 'enzyme';

describe('<DropArea />', () => {

	it('should render DropArea', () => {
		const wrapper = shallow(<DropArea/>);
		expect(wrapper.find('Dropzone').length).toEqual(1);
	});
  // probably should render a button.

});
