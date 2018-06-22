import React from 'react';
import { shallow } from 'enzyme';
import DefaultFooter from '../DefaultFooter';

test('should render DefaultFooter component without crashing', () => {
	const wrapper = shallow(<DefaultFooter />);
	expect(wrapper).toMatchSnapshot();
});
