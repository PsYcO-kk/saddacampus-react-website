import React from 'react';
import { Row, Col } from 'reactstrap';

const CategoriesNavbar = () => (
	<Row className="blogs-category-nav remove-extra-space">
		<Col className="navItem">College</Col>
		<Col className="navItem">Art & Artist</Col>
		<Col className="navItem">Fashion</Col>
		<Col className="navItem">Entertainment</Col>
		<Col className="navItem">Lifestyle</Col>
		<Col className="navItem">Romance</Col>
		<Col className="navItem">Travel</Col>
		<Col className="navItem">Sports</Col>
		<Col className="navItem">Startups</Col>
		<Col className="navItem">Sex & Lust</Col>
		<Col className="navItem">More</Col>
	</Row>
);

export default CategoriesNavbar;
