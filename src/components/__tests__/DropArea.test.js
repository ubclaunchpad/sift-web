import DropArea from './../DropArea';
import React from 'react';
import ReactDOM from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import request from 'superagent';

describe('<DropArea />', () => {

	it('should render DropArea', () => {
		const wrapper = shallow(<DropArea/>);
		expect(wrapper.find('Dropzone').length).toEqual(1);
	});
	it('has multiple file uploads set', () => {
		const wrapper = shallow(<DropArea/>);
		expect(wrapper.props().children.props.multiple).toEqual(true);
	});
	it('simulates onDrop events', () => {
		const onDropMethod = sinon.spy();
		const wrapper = shallow(
			<DropArea/>
		);
		wrapper.find('button').simulate('click');
		expect(onDropMethod).to.have.property('callCount', 1);
		// other option spy on request.post
		// and then directly call DropArea.onDrop('file') with a mockedfile
	});
	it('directly calls onDrop and checks that a request is made', () => {
		const	file = {
			name: 'afile.pdf',
			size: 1111,
			type: 'application/pdf'
		}
		ReactDOM.render(DropArea, document.getElementById('container'));
		const listenForRequest = sinon.spy();
		request.post = function stubbedFunction() {
			listenForRequest();
		}
		// ive rendered a virtual dom in the container....
		// now how do i simulate an on drop?
		DropArea.onDrop(file);
		console.log("Here is my spy: " + listenForRequest);

		expect(listenForRequest).to.have.propety('CallCount', 1);
	});
});
