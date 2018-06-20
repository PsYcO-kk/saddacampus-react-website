import {shallow} from 'enzyme';
import React from 'react';
import AppSection from '../GetAppSection.js';

test("testing for App Section page component" , ()=>{
    const wrapper = shallow(<AppSection />)
    expect(wrapper).toMatchSnapshot();
})
