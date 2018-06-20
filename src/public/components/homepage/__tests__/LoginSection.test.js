import {shallow} from 'enzyme';
import React from 'react';
import LoginSection from '../LoginSection';

test("should render LoginSection correctly" , ()=>{
    const wrapper = shallow(<LoginSection />)
    expect(wrapper).toMatchSnapshot();
})

test("should change state/view of LoginSection with provided values" , ()=>{
    const wrapper = shallow(<LoginSection />);
    const newState = {
		loading: false,
        NumberForm: false,
        OtpForm: false,
        ProfileSettings: true,
        number: "",
        country_code : "",
        otp:"",
        message:""
	}
	const change = {
		NumberForm: false,
		ProfileSettings: true
	}
    wrapper.find('NumberForm').prop('changeState')(change);
    expect(wrapper.state()).toEqual(newState);
})
