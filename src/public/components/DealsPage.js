import React from 'react';

import Header from './deals/Header';
import CategoriesSection from './deals/CategoriesSection';
import FoodDrinksSection from './deals/FoodDrinksSection';
import FashionStylingSection from './deals/FashionStylingSection';
import StationarySection from './deals/StationarySection';

const DealsPage = () => (
	<div className="deals-page">
		<Header />
		<CategoriesSection />
		<FoodDrinksSection />
		<FashionStylingSection />
		<StationarySection />
		<FoodDrinksSection />
		<FoodDrinksSection />
	</div>
);

export default DealsPage;
