import React from 'react';
import { Row, Col } from 'reactstrap';
import { Parallax, Background } from 'react-parallax';

import Header from '../Header';
import CategoriesNavbar from '../CategoriesNavbar';
import BlogsSection from './BlogsSection';

const DefaultStructure = () => (
	<div>
		<Header />
		<CategoriesNavbar />
		<div className="blogs-mainpage">
			<BlogsSection type="featured" />
			<Parallax
				bgImage={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg'}
				bgImageAlt="background"
				bgStyle={{ filter: 'brightness(50%)' }}
				className="blogs-greeting"
				strength={400}
			>
				<div>
					<h1>Where words matter,</h1>
					<h1>SADDACAMPUS BLOGS</h1>
				</div>
			</Parallax>
			<BlogsSection />
			<BlogsSection />
			<BlogsSection />
		</div>
	</div>
);

export default DefaultStructure;
