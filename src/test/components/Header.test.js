import {shallow} from 'enzyme';
import React from 'react';
import Header from './../../components/Header.js'

test("testing for Header page component" , ()=>{
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
});

test("testing the click function of Navbar Toggle" , ()=>{
    const wrapper = shallow(<Header />);
    const isOpen = wrapper.state("isOpen");
    wrapper.find('NavbarToggler').simulate('click');
    expect(wrapper.state("isOpen")).toBe(!isOpen);
})