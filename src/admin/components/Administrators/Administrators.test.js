import React from 'react';
import { shallow } from 'enzyme';
import Administrators from './Administrators';

test('should render Administrators component without crashing', () => {
	const wrapper = shallow(<Administrators />);
	expect(wrapper).toMatchSnapshot();
})
