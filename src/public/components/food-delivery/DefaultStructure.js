import React from 'react';
import { Row, Col } from 'reactstrap';
import { Route } from 'react-router-dom';

import Header from '../Header';
import ServicesNavbar from '../ServicesNavbar';
import DealsSection from './DealsSection';
import RestaurantsList from './RestaurantsList';
import FoodItemsList from './FoodItemsList';
import CheckoutPage from './CheckoutPage';
import Footer from '../Footer';

import '../../assets/styles/food-delivery-page.css';

const Restaurants = () => (
	<div>
		<ServicesNavbar />
		<DealsSection />
		<RestaurantsList />
	</div>
);

const FoodItems = () => (
	<div>
		<ServicesNavbar />
		<FoodItemsList />
	</div>
);

const DefaultStructure = () => (
	<div>
		<Header isSticky={true} hasBorderBottom={true} hasShadow={true} />
		<Route path="/food-delivery/restaurants" component={Restaurants} />
		<Route path="/food-delivery/food-items" component={FoodItems} />
		<Route path="/food-delivery/checkout-page" component={CheckoutPage} />
		<Footer />
	</div>
);

export default DefaultStructure;
