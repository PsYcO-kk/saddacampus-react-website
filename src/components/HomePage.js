import React, { Fragment } from 'react';

import LoginSection from './homepage/LoginSection.js';
import VideoSection from './homepage/VideoSection.js'
import ServicesSection from "./homepage/ServicesSection.js";
import BlogsSection from './homepage/BlogsSection.js';
import ReviewsSection from './homepage/ReviewsSection.js';
import GetAppSection from './homepage/GetAppSection.js';


const HomePage = () => (
	<Fragment>
		<LoginSection />
		<VideoSection />
		<ServicesSection />
		<BlogsSection />
		<ReviewsSection />
		<GetAppSection />
	</Fragment>
);

export default HomePage;
