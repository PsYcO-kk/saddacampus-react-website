import {shallow} from 'enzyme';
import React from 'react';
import LogoContainer from '../../components/homepage/LogoContainer';

test("should render LogoContainer correctly" , ()=>{
    const wrapper = shallow(<LogoContainer />)
    expect(wrapper).toMatchSnapshot();
})
