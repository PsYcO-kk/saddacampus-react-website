import React from 'react';

import LoginSection from './LoginSection';
import ServicesSection from "./ServicesSection";
import BlogsSection from './BlogsSection';
import ReviewsSection from './ReviewsSection';
import NewsSection from './NewsSection';
import GetAppSection from './GetAppSection';
import Footer from '../Footer';

import '../../assets/styles/login-page.css';

const DefaultStructure = () => (
	<div>
		<LoginSection />
		<ServicesSection />
		<BlogsSection />
		<ReviewsSection />
		<NewsSection />
		<GetAppSection />
		<Footer />
	</div>
);

export default DefaultStructure;
