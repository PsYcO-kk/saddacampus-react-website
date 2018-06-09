import {shallow} from 'enzyme';
import React from 'react';
import AppSection from './../../../components/homepage/GetAppSection.js';

test("testing for App Section page component" , ()=>{
    const wrapper = shallow(<AppSection />)
    expect(wrapper).toMatchSnapshot();
})