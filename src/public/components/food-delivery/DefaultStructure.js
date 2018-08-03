import React from 'react';
import { Row, Col } from 'reactstrap';

import Header from '../Header';
import ServicesNavbar from './ServicesNavbar';
import RestaurantList from './RestaurantList';
import DealsSection from './DealsSection';

const DefaultStructure = () => (
	<div>
		<Header />
		<ServicesNavbar />
		<DealsSection />
		<RestaurantList />
	</div>
);

export default DefaultStructure;
