import React from 'react';

import Header from '../Header';
import DealsNavbar from './DealsNavbar';
import CategoriesSection from './CategoriesSection';
import FoodDrinksSection from './FoodDrinksSection';
import FashionStylingSection from './FashionStylingSection';
import StationarySection from './StationarySection';

const DefaultStructure = () => (
	<div className="deals-page">
		<Header />
		<DealsNavbar />
		<CategoriesSection />
		<FoodDrinksSection />
		<FashionStylingSection />
		<StationarySection />
		<FoodDrinksSection />
		<FoodDrinksSection />
	</div>
);

export default DefaultStructure;
