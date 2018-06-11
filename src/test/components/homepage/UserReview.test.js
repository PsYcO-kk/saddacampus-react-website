import {shallow} from 'enzyme';
import React from 'react';
import UserReview from './../../../components/homepage/UserReview.js';

test("testing for User Review page component with the props" , ()=>{
    const wrapper = shallow(<UserReview username="akash"/>)
    expect(wrapper).toMatchSnapshot();
  })

test("testing for User Review page component without the props being passed" , ()=>{
    const wrapper = shallow(<UserReview />)
    expect(wrapper).toMatchSnapshot();
})


