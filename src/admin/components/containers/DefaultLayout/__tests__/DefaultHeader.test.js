import React from 'react';
import { shallow } from 'enzyme';
import { DefaultHeader } from '../DefaultHeader';

test('should render DefaultHeader component without crashing', () => {
	const wrapper = shallow(<DefaultHeader />);
	expect(wrapper).toMatchSnapshot();
});
