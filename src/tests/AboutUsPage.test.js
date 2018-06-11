import {shallow} from 'enzyme';
import React from 'react';
import AboutUsPage from '../components/AboutUsPage';

test("should render AboutUsPage correctly" , ()=>{
    const wrapper = shallow(<AboutUsPage />)
    expect(wrapper).toMatchSnapshot();
})
