import {shallow} from 'enzyme';
import React from 'react';
import LogoContainer from '../LogoContainer';

test("should render LogoContainer correctly" , ()=>{
    const wrapper = shallow(<LogoContainer />)
    expect(wrapper).toMatchSnapshot();
})
