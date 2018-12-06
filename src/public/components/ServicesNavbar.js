import React from 'react';
import { Row, Col, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const ServicesNavbar = () => (
	<div className="services-navbar">
		<Row className="remove-extra-space">
			<Col md={7} className="remove-extra-space">
			</Col>
			<Col md={5} className="remove-extra-space">
				<Row className="remove-extra-space">
					<Col md={3} className="remove-extra-space">
						<div>
							<NavLink to="/food-delivery" activeClassName="active-service-link" className="service-link">Food Delivery</NavLink>
						</div>
					</Col>
					<Col md={3} className="remove-extra-space">
						<div>
							<NavLink to="/video-lectures" activeClassName="active-service-link" className="service-link">Video Lectures</NavLink>
						</div>
					</Col>
					<Col md={3} className="remove-extra-space">
						<div>
							<NavLink to="/internships" activeClassName="active-service-link" className="service-link">Internships</NavLink>
						</div>
					</Col>
					<Col md={3} className="remove-extra-space">
						<div>
							<NavLink to="/deals" activeClassName="active-service-link" className="service-link">Deals</NavLink>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
		<div className="search-box">
			<div className="left-addon">
				<span className="search-icon">
					<img src='/assets/images/svg/search.svg' width="18px" />
				</span>
				<Input type="search" className="search-bar" placeholder="Search for cuisine and restaurants"/>
			</div>
		</div>
	</div>
);

export default ServicesNavbar;
