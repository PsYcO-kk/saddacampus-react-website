import {shallow} from 'enzyme';
import React from 'react';
import Header from '../Header';

test("should render Header correctly" , ()=>{
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
});

test("should toggle Navbar on click" , ()=>{
    const wrapper = shallow(<Header />);
    const isOpen = wrapper.state("isOpen");
    wrapper.find('NavbarToggler').simulate('click');
    expect(wrapper.state("isOpen")).toBe(!isOpen);
})
