import {shallow} from 'enzyme';
import React from 'react';
import BlogsSection from '../BlogsSection';

test("should render BlogsSection correctly" , ()=>{
    const wrapper = shallow(<BlogsSection />)
    expect(wrapper).toMatchSnapshot();
})
