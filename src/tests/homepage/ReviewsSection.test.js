import {shallow} from 'enzyme';
import React from 'react';
import ReviewsSection from '../../components/homepage/ReviewsSection';

test("should render ReviewsSection correctly" , ()=>{
    const wrapper = shallow(<ReviewsSection />)
    expect(wrapper).toMatchSnapshot();
})
