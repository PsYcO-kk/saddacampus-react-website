import {shallow} from 'enzyme';
import React from 'react';
import Blog from './../../../components/homepage/Blog.js';

test("testing for Blog Section page component without props" , ()=>{
    const wrapper = shallow(<Blog />)
    expect(wrapper).toMatchSnapshot();
})

test("testing for Blog Section page component with props" , ()=>{
    const wrapper = shallow(<Blog imgSrc="coffee.PNG" />)
    expect(wrapper).toMatchSnapshot();
})