import React from 'react';
import {shallow} from 'enzyme';
import { Login } from './Login';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<Login />);
})

test('should render Login component without crashing', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should disable error when username or password is changed', () => {
	wrapper.setState({ error: 'xyz' });
	wrapper.find('Input[type="text"]').simulate('change');
	expect(wrapper.state('error')).toBe('');
});
