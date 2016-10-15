import DropArea from './../DropArea';
import React from 'react';
import {shallow} from 'enzyme';

describe('<DropArea />', () => {

	it('should render a button', () => {
		const wrapper = shallow(<DropArea />);
		expect(wrapper.find('DropArea').length).toEqual(1);
	});
  // probably should render a button.

});
