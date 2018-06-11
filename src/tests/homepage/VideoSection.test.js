import {shallow} from 'enzyme';
import React from 'react';
import VideoSection from '../../components/homepage/VideoSection';

test("should render VideoSection correctly" , ()=>{
    const wrapper = shallow(<VideoSection />)
    expect(wrapper).toMatchSnapshot();
})
