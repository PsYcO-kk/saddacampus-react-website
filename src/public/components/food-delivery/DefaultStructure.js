import React from 'react';
import { Row, Col } from 'reactstrap';

import Header from '../Header';
import ServicesNavbar from '../ServicesNavbar';
import DealsSection from './DealsSection';
import RestaurantsList from './RestaurantsList';
import FoodItemsList from './FoodItemsList';

const DefaultStructure = () => (
	<div>
		<Header />
		<ServicesNavbar />
		{/*<DealsSection />
		<RestaurantsList />*/}
		<FoodItemsList />
	</div>
);

export default DefaultStructure;
