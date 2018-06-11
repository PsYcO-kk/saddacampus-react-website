import {shallow} from 'enzyme';
import React from 'react';
import VideoSection from '../../components/homepage/VideoSection.js';

test("testing for Video Section page component" , ()=>{
    const wrapper = shallow(<VideoSection />)
    expect(wrapper).toMatchSnapshot();
})
