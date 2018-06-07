import React, { Fragment } from 'react';
import VideoSection from './static_components/VideoSection.js'
import Services from "./static_components/Services.js";
import Blog from "./static_components/Blogs.js";
import UserReview from './static_components/UserReview.js';
import SaddaImage from './static_components/SadddaImage.js'
import Form from './forms/Form.js';


const HomePage = () => (
	<Fragment>
		<SaddaImage />
		<Form />
		<VideoSection />
		<Services />
		<Blog />
		<UserReview />
	</Fragment>
);

export default HomePage;
