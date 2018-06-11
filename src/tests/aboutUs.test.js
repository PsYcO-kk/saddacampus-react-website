import {shallow} from 'enzyme';
import React from 'react';
import AboutUs from '../components/AboutUsPage.js';

test("testing for About Us page component" , ()=>{
    const wrapper = shallow(<AboutUs />)
    expect(wrapper).toMatchSnapshot();
})
