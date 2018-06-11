import React from 'react';
import { shallow } from 'enzyme';
import ProfileSettings from '../../../components/homepage/forms/ProfileSettings';

let wrapper, country_code='+91', number='5464645454';

beforeEach(() => {
	wrapper = shallow(<ProfileSettings country_code={country_code} number={number} />);
});

test('should render ProfileSettings correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

// test('should set and render invalid-feedback when (username.length < 5)', () => {
// 	const value = '@5ec';
// 	wrapper. find('#username').simulate('change', {
// 		target: { value }
// 	});
// 	expect(wrapper.state('feedback')).toBe('Username must be within 5-25 characters.');
// 	expect(wrapper).toMatchSnapshot();
// });

// test('should set and render invalid-feedback when (username.length > 25)', () => {
// 	const value = 'rjec y4 389ty94h eiuw390$R%$#@gjjg';
// 	wrapper. find('#username').simulate('change', {
// 		target: { value }
// 	});
// 	expect(wrapper.state('feedback')).toBe('Username must be within 5-25 characters.');
// 	expect(wrapper).toMatchSnapshot();
// });
