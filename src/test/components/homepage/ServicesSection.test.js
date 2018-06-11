import {shallow} from 'enzyme';
import React from 'react';
import ServicesSection from './../../../components/homepage/ServicesSection.js';

test("testing for Services Section page component" , ()=>{
    const wrapper = shallow(<ServicesSection />)
    expect(wrapper).toMatchSnapshot();
})