import {shallow} from 'enzyme';
import React from 'react';
import PrivacyPolicyPage from '../PrivacyPolicypage'

test("should render PrivacyPolicyPage correctly" , ()=>{
    const wrapper = shallow(<PrivacyPolicyPage />)
    expect(wrapper).toMatchSnapshot();
})
