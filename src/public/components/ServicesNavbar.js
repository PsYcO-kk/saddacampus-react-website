import React from 'react';
import { Row, Col, Input } from 'reactstrap';

const ServicesNavbar = () => (
	<div className="services-navbar">
		<Row className="remove-extra-space">
			<Col md={3} className="remove-extra-space">
				<div className="service-box">
					<img className="img-fluid" src="assets/images/coffee.PNG" />
				</div>
			</Col>
			<Col md={3} className="remove-extra-space">
				<div className="service-box">
					<img className="img-fluid" src="assets/images/coffee.PNG" />
				</div>
			</Col>
			<Col md={3} className="remove-extra-space">
				<div className="service-box">
					<img className="img-fluid" src="assets/images/coffee.PNG" />
				</div>
			</Col>
			<Col md={3} className="remove-extra-space">
				<div className="service-box">
					<img className="img-fluid" src="assets/images/coffee.PNG" />
				</div>
			</Col>
		</Row>
		<div className="search-box">
			<div className="left-addon">
				<span className="search-icon">
					<img src='./assets/images/svg/search.svg' width="20px" />
				</span>
				<Input type="search" className="search-bar" placeholder="Search for cuisine and restaurants"/>
			</div>
		</div>
	</div>
);

export default ServicesNavbar;
