import {shallow} from 'enzyme';
import React from 'react';
import ServicesSection from '../ServicesSection';

test("should render ServicesSection correctly" , ()=>{
    const wrapper = shallow(<ServicesSection />)
    expect(wrapper).toMatchSnapshot();
})
