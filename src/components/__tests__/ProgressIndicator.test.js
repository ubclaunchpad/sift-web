import ProgressIndicator from './../ProgressIndicator';
import Radium from 'radium';
import React from 'react';
import {shallow} from 'enzyme';

// Prevent Radium from throwing errors about app not being wrapped in `StyleRoot`
Radium.TestMode.enable();

describe('<ProgressIndicator />', () => {
	it('should render a div', () => {
		const wrapper = shallow(<ProgressIndicator />);
		expect(wrapper.find('div')).toBeDefined();
	});

	it('should scale based on size prop', () => {
		const size = 240;
		const wrapper = shallow(<ProgressIndicator size={size} />);
		const style = wrapper.find('div').node.props.style;
		expect(style.width).toEqual(size);
		expect(style.height).toEqual(size);
	});
});
