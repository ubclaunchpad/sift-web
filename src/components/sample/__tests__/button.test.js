import Button from './../Button';
import React from 'react';
import {shallow} from 'enzyme';

describe ('<Button/>', () => {
  it('Should render a button', () => {
    const wrapper = shallow(<Button/>);
    expect(wrapper.contains(<Text>Testing</Text>)).to.equal(true);
  });
});
