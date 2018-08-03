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
		<Row className="remove-extra-space">
			<Col md={6} className="remove-extra-space">
				<div className="search-box left-addon">
					<span className="search-icon">
						<img src='./assets/images/svg/search.svg' width="25px" />
					</span>
					<Input type="search" className="search-bar" placeholder="Search for cuisine and restaurants"/>
				</div>
			</Col>
		</Row>
	</div>
);

export default ServicesNavbar;
