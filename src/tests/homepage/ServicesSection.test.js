import {shallow} from 'enzyme';
import React from 'react';
import ServicesSection from '../../components/homepage/ServicesSection';

test("should render ServicesSection correctly" , ()=>{
    const wrapper = shallow(<ServicesSection />)
    expect(wrapper).toMatchSnapshot();
})
