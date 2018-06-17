import {shallow} from 'enzyme';
import React from 'react';
import NotFoundPage from '../NotFoundPage'

test("should render NotFoundPage correctly" , ()=>{
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot();
})
