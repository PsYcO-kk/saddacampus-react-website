import {shallow} from 'enzyme';
import React from 'react';
import Services from '../../components/homepage/Service.js';

test("testing for Service page component without props" , ()=>{
    const wrapper = shallow(<Services />)
    expect(wrapper).toMatchSnapshot();
})

test("testing for Service page component with props" , ()=>{
    const deliveryDescription = "Don't go out in the summer heat pretty. You will tan. Let us deliver right at your hostels or PG.";
    const wrapper = shallow(<Services serviceName="Food Delivery" serviceDescription={deliveryDescription} />);
    expect(wrapper).toMatchSnapshot();
})
