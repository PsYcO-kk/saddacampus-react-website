import {shallow} from 'enzyme';
import React from 'react';
import BlogSection from '../../components/homepage/BlogsSection.js';

test("testing for Blog Section page component" , ()=>{
    const wrapper = shallow(<BlogSection />)
    expect(wrapper).toMatchSnapshot();
})
