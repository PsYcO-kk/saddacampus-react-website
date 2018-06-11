import {shallow} from 'enzyme';
import React from 'react';
import Service from '../../components/homepage/Service';

// test("should render Service component without props" , ()=>{
//     const wrapper = shallow(<Service />)
//     expect(wrapper).toMatchSnapshot();
// })

test("should render Service component with props" , ()=>{
    const deliveryDescription = "Don't go out in the summer heat pretty. You will tan. Let us deliver right at your hostels or PG.";
    const wrapper = shallow(<Service serviceName="Food Delivery" serviceDescription={deliveryDescription} />);
    expect(wrapper).toMatchSnapshot();
})
