import React from 'react';

import Header from '../Header';
import CategoriesNavbar from '../CategoriesNavbar';
import CategoryLecturesSection from './CategoryLecturesSection';
import Footer from '../Footer';

const DefaultStructure = () => (
	<div>
		<Header />
		<CategoriesNavbar />
		<div className="video-lectures-page">
			<CategoryLecturesSection />
			<CategoryLecturesSection />
			<CategoryLecturesSection />
			<CategoryLecturesSection />
		</div>
		<Footer />
	</div>
);

export default DefaultStructure;
