import {shallow} from 'enzyme';
import React from 'react';
import Footer from './../../components/Footer.js'

test("testing for Footer page component" , ()=>{
    const wrapper = shallow(<Footer />)
    expect(wrapper).toMatchSnapshot();
})