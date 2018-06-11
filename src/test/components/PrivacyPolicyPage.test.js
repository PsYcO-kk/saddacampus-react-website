import {shallow} from 'enzyme';
import React from 'react';
import PrivacyPolicyPage from './../../components/PrivacyPolicypage.js'

test("testing for Privacy policy page component" , ()=>{
    const wrapper = shallow(<PrivacyPolicyPage />)
    expect(wrapper).toMatchSnapshot();
})