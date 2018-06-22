import React from 'react';
import { shallow } from 'enzyme';
import DefaultAside from '../DefaultAside';

test('should render DefaultAside component without crashing', () => {
	const wrapper = shallow(<DefaultAside />);
	expect(wrapper).toMatchSnapshot();
});
