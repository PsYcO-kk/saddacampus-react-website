import {shallow} from 'enzyme';
import React from 'react';
import BlogsSection from '../../components/homepage/BlogsSection';

test("should render BlogsSection correctly" , ()=>{
    const wrapper = shallow(<BlogsSection />)
    expect(wrapper).toMatchSnapshot();
})
