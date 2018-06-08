import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			isOpen: false
		}
	}
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render(){
		return (
			<div>
				<Navbar color="light" light expand="lg" className="bg-white border-bottom">
					<div className="container">
						<NavbarBrand href="/">
							<img src="/assets/images/brand/16-9.png" width="50" className="d-inline-block align-top" alt="" />
							&nbsp; Saddacampus
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink to="/about-us" activeClassName="active" className="nav-link">About Us</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/privacy-policy" activeClassName="active" className="nav-link">Privacy Policy</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</div>
		);
	}
}
