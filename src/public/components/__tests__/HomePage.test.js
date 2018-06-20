import {shallow} from 'enzyme';
import React from 'react';
import HomePage from '../HomePage'

test("should render HomePage correctly" , ()=>{
    const wrapper = shallow(<HomePage />)
    expect(wrapper).toMatchSnapshot();
})
