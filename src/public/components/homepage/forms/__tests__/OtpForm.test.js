import React from 'react';
import { shallow } from 'enzyme';
import OtpForm from '../OtpForm';

let wrapper, country_code='+91', number='5464645454';

beforeEach(() => {
	wrapper = shallow(<OtpForm country_code={country_code} number={number} />);
});

test('should render OtpForm correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should set otp on valid input', () => {
	const value = '746546';
	wrapper. find('input').simulate('change', {
		target: { value }
	});
	expect(wrapper.state('otp')).toBe(value);
});

test('should not set otp on invalid input', () => {
	const value = '786786hgd';
	wrapper. find('input').simulate('change', {
		target: { value }
	});
	expect(wrapper.state('otp')).toBe('');
});

test('should set and render error on invalid otp submit', () => {
	wrapper. find('form').simulate('submit', {
		preventDefault: () => {},
		target: {
			otpInput: { value: '76343' }
		}
	});
	expect(wrapper.state('error')).toBe('Please enter a valid OTP.');
	expect(wrapper).toMatchSnapshot();
});
