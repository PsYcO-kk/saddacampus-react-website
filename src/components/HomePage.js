import React, { Fragment } from 'react';
import VideoSection from './VideoSection.js'
import Services from "./Services.js";
import Blog from "./Blogs.js";
import UserReview from './UserReview.js';

const HomePage = () => (
	<Fragment>
		<VideoSection />
		<Services />
		<Blog />
		<UserReview />
	</Fragment>
);

export default HomePage;
