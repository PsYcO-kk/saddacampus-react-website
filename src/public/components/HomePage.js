import React, { Fragment } from 'react';

import LoginSection from './homepage/LoginSection.js';
import ServicesSection from "./homepage/ServicesSection.js";
import BlogsSection from './homepage/BlogsSection.js';
import ReviewsSection from './homepage/ReviewsSection.js';
import NewsSection from './homepage/NewsSection.js';
import GetAppSection from './homepage/GetAppSection.js';


const HomePage = () => (
	<Fragment>
		<LoginSection />
		<ServicesSection />
		<BlogsSection />
		<ReviewsSection />
		<NewsSection />
		<GetAppSection />
	</Fragment>
);

export default HomePage;
