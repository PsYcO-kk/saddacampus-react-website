import React from 'react';
import { shallow } from 'enzyme';
import { DefaultLayout } from '../DefaultLayout';

test('should render DefaultLayout component without crashing', () => {
	const wrapper = shallow(<DefaultLayout />);
	expect(wrapper).toMatchSnapshot();
});
