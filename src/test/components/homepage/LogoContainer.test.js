import {shallow} from 'enzyme';
import React from 'react';
import LogoContainer from './../../../components/homepage/LogoContainer.js';

test("testing for Logo container page component" , ()=>{
    const wrapper = shallow(<LogoContainer />)
    expect(wrapper).toMatchSnapshot();
})