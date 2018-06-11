import {shallow} from 'enzyme';
import React from 'react';
import PageNotFound from '../components/NotFoundPage.js'

test("testing for page not found component" , ()=>{
    const wrapper = shallow(<PageNotFound />)
    expect(wrapper).toMatchSnapshot();
})
