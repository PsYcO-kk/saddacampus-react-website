import {shallow} from 'enzyme';
import React from 'react';
import UserReview from '../UserReview';

test("should render UserReview component with the props" , ()=>{
    const wrapper = shallow(<UserReview username="akash"/>)
    expect(wrapper).toMatchSnapshot();
})

// test("should render UserReview component without the props being passed" , ()=>{
//     const wrapper = shallow(<UserReview />)
//     expect(wrapper).toMatchSnapshot();
// })


