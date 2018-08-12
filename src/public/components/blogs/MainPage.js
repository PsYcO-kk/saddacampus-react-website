import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';

import BlogsSection from './BlogsSection';

const MainPage = () => (
	<div className="blogs-mainpage">
		<BlogsSection type="featured" />
		<div className="blogs-greeting">
			<h2>Where words matter,</h2>
			<h2>SADDACAMPUS BLOGS</h2>
		</div>
		<BlogsSection />
		<BlogsSection />
		<BlogsSection />
	</div>
);

export default MainPage;
