import React from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
		return (
			<Navbar color="light" light expand="lg" sticky="top" className="bg-white border-bottom">
				<Container>
					<NavbarBrand href="/">
						<img src="/assets/images/brand/16-9.png" width="100" className="d-inline-block align-top" alt="" />
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink to="/home" activeClassName="active" className="nav-link" style={{ 'fontWeight': 'bold' }}>Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/food-delivery" activeClassName="active" className="nav-link" style={{ 'fontWeight': 'bold' }}>Food Delivery</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/video-lectures" activeClassName="active" className="nav-link" style={{ 'fontWeight': 'bold' }}>Video Lectures</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/internships" activeClassName="active" className="nav-link" style={{ 'fontWeight': 'bold' }}>Internships</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/blogs" activeClassName="active" className="nav-link" style={{ 'fontWeight': 'bold' }}>Blogs</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/deals" activeClassName="active" className="nav-link" style={{ 'fontWeight': 'bold' }}>Deals</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/help" activeClassName="active" className="nav-link" style={{ 'fontWeight': 'bold' }}>Help</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		);
	}
}
