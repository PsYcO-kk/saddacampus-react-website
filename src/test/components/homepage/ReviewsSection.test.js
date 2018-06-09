import {shallow} from 'enzyme';
import React from 'react';
import ReviewSection from './../../../components/homepage/ReviewsSection.js';

test("testing for Reviews Section page component" , ()=>{
    const wrapper = shallow(<ReviewSection />)
    expect(wrapper).toMatchSnapshot();
})