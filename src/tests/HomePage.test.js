import {shallow} from 'enzyme';
import React from 'react';
import HomePage from '../components/HomePage'

test("should render HomePage correctly" , ()=>{
    const wrapper = shallow(<HomePage />)
    expect(wrapper).toMatchSnapshot();
})
