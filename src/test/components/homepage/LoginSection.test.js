import {shallow} from 'enzyme';
import React from 'react';
import LoginSection from './../../../components/homepage/LoginSection.js';

test("testing for Log in Section page component" , ()=>{
    const wrapper = shallow(<LoginSection />)
    expect(wrapper).toMatchSnapshot();
})

test("testing for Log in Section page change View function" , ()=>{
    const wrapper = shallow(<LoginSection />);
    const newState = {
        NumberForm: false,
        OtpForm: false,
        ProfileSettings: true,
        number: "",
        country_code : "",
        otp:"",
        message:""
    }
    const NumberFor = wrapper.find('NumberForm').prop('changeView')(newState);
    expect(wrapper.state()).toEqual(newState);
   })

   test("testing for Log in Section initial state" , ()=>{
    const wrapper = shallow(<LoginSection />);
    const InitialState = {
        NumberForm: true,
        OtpForm: false,
        ProfileSettings: false,
        number: '',
        country_code: '',
        otp: '',
        message: ''
    }
   expect(wrapper.state()).toEqual(InitialState);
   })