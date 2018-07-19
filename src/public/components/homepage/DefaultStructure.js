import React from 'react';

import LoginSection from './LoginSection.js';
import ServicesSection from "./ServicesSection.js";
import BlogsSection from './BlogsSection.js';
import ReviewsSection from './ReviewsSection.js';
import NewsSection from './NewsSection.js';
import GetAppSection from './GetAppSection.js';


const DefaultStructure = () => (
	<div>
		<LoginSection />
		<ServicesSection />
		<BlogsSection />
		<ReviewsSection />
		<NewsSection />
		<GetAppSection />
	</div>
);

export default DefaultStructure;
