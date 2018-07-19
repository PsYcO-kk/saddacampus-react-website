import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';

import BlogCard from './BlogCard';

const MainPage = () => (
	<div className="blogs-mainpage">
		<div className="blogs-section">
			<h4>FEATURED</h4>
			<Row className="remove-extra-space">
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
			</Row>
		</div>
		<div className="blogs-greeting">
			<h2>Where words matter,</h2>
			<h2>SADDACAMPUS BLOGS</h2>
			<Button>Get Started <FontAwesomeIcon icon={faChevronRight} /></Button>
		</div>
		<div className="blogs-section">
			<h4>FEATURED</h4>
			<Row className="remove-extra-space">
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
			</Row>
		</div>
		<div className="blogs-section">
			<h4>FEATURED</h4>
			<Row className="remove-extra-space">
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
			</Row>
		</div>
		<div className="blogs-section">
			<h4>FEATURED</h4>
			<Row className="remove-extra-space">
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
			</Row>
		</div>
		<div className="blogs-section">
			<h4>FEATURED</h4>
			<Row className="remove-extra-space">
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
				<Col md={4} className="remove-extra-space">
					<BlogCard />
				</Col>
			</Row>
		</div>
	</div>
);

export default MainPage;
