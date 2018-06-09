import {shallow} from 'enzyme';
import React from 'react';
import HomePage from './../../components/HomePage.js'

test("testing for HomePage component" , ()=>{
    const wrapper = shallow(<HomePage />)
    expect(wrapper).toMatchSnapshot();
})