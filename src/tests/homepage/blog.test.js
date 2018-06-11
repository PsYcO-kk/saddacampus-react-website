import {shallow} from 'enzyme';
import React from 'react';
import Blog from '../../components/homepage/Blog';

// test("should render Blog component without props" , ()=>{
//     const wrapper = shallow(<Blog />)
//     expect(wrapper).toMatchSnapshot();
// })

test("should render Blog component with props" , ()=>{
    const wrapper = shallow(<Blog imgSrc="coffee.PNG" />)
    expect(wrapper).toMatchSnapshot();
})
