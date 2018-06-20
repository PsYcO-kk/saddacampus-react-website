import React from 'react';
import { shallow } from 'enzyme';
import NumberForm from '../NumberForm';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<NumberForm />);
});

test('should render NumberForm correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should set number on valid input', () => {
	const value = '7465465475';
	wrapper. find('input').simulate('change', {
		target: { value }
	});
	expect(wrapper.state('number')).toBe(value);
});

test('should not set number on invalid input', () => {
	const value = '7465465475bff';
	wrapper. find('input').simulate('change', {
		target: { value }
	});
	expect(wrapper.state('number')).toBe('');
});

test('should set and render error on invalid number submit', () => {
	const country_code = '+91';
	const number = '765765';
	wrapper. find('form').simulate('submit', {
		preventDefault: () => {},
		target: {
			country_code: { value: country_code },
			numberInput: { value: number }
		}
	});
	expect(wrapper.state('error')).toBe('Please enter a valid mobile number.');
	expect(wrapper).toMatchSnapshot();
});
