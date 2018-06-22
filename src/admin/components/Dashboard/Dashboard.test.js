import React from 'react';
import { Dashboard } from './Dashboard';
import { shallow } from 'enzyme'

jest.mock('react-chartjs-2', () => ({
	Line: () => null,
	Bar: () => null
}));

test('should render Dashboard without crashing', () => {
	const wrapper = shallow(<Dashboard />);
	expect(wrapper).toMatchSnapshot();
});
