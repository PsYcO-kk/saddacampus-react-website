import React from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Header extends React.Component {
	constructor(){
		super();
		this.state = { isOpen: false };
	}
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render(){
		const settings = {
			infinite: false,
			speed: 500,
			slidesToScroll: 1,
			slidesToShow: 4,
			swipeToSlide: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		return (
			<div>
				<Navbar color="light" light expand="lg" className="bg-white border-bottom">
					<Container>
						<NavbarBrand href="/">
							<img src="/assets/images/brand/16-9.png" width="100" className="d-inline-block align-top" alt="" />
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<a href="https://play.google.com/store/apps/details?id=com.saddacampus.app" className="nav-link" style={{ 'fontWeight': 'bold' }}>Get the App</a>
								</NavItem>
								<NavItem>
									<NavLink to="/about-us" activeClassName="active" className="nav-link" style={{ 'fontWeight': 'bold' }}>About Us</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/privacy-policy" activeClassName="active" className="nav-link" style={{ 'fontWeight': 'bold' }}>Privacy Policy</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
				<div className="deals-header">
					<Container>
						<Slider {...settings}>
							<div>
								<div className="thumb">
									<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
								</div>
							</div>
							<div>
								<div className="thumb">
									<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
								</div>
							</div>
							<div>
								<div className="thumb">
									<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
								</div>
							</div>
							<div>
								<div className="thumb">
									<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
								</div>
							</div>
							<div>
								<div className="thumb">
									<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
								</div>
							</div>
							<div>
								<div className="thumb">
									<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
								</div>
							</div>
							<div>
								<div className="thumb">
									<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
								</div>
							</div>
							<div>
								<div className="thumb">
									<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
								</div>
							</div>
						</Slider>
						<div className="row section-title">
							<h1>Deals from all around</h1>
							<p>There are always some things you need to know and once in college you need all the help available.</p>
						</div>
					</Container>
				</div>
			</div>
		);
	}
}
