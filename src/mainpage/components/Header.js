import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem ,  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem , Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faCog} from "@fortawesome/fontawesome-free-solid"

const style = {
    "width" : "10%",
}
const paddingTop = {
	paddingTop : "15px"
}
const NavItemPadding = {
	"paddingRight"  : "40px"
}
const NavFixed = {
	"width" : "100%",
	"position" : "fixed",
	"zIndex" : "99"
}
var styleSetting = {
    "backgroundColor" : "white" ,
    "border" : "none",
    "color": "black",
	"boxShadow"  :"none",
	"marginTop" : "8px"
}
var positionSettings = {
	"position":"relative",
	"bottom":"4px"
}
var dropdownBox = {
	"borderRadius"  : "0px"
}
export default class Header extends React.Component {
	constructor(){
		super();
		this.state = { isOpen: false , isOpen2 : false };
	}
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	toggle_ = () => {
		this.setState({
			isOpen2 : !this.state.isOpen2
		});
	}
	render(){
		return (
			<div style={NavFixed} >  
				<Navbar color="light" light expand="lg" className="bg-white" style={paddingTop} >
					<div className="container">
						<NavbarBrand href="/" className="logoName" >
							<img src="/assets/images/brand/16-9.png" style={style} className="d-inline-block align-top" alt="" />
							&nbsp; Food delivery
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem style={NavItemPadding}>
                        		<NavLink to="/profile" className="nav-link">Profile</NavLink>
								</NavItem>
								<NavItem  style={positionSettings} >
									<ButtonDropdown isOpen={this.state.isOpen2} toggle={this.toggle_} className="buttongroup">
									<DropdownToggle style={styleSetting} >
									<img src="/assets/images/icon_setting.png" className="settingIcon" />
									</DropdownToggle>
									<DropdownMenu style={dropdownBox} >
										<DropdownItem >Edit Profile</DropdownItem>
										<DropdownItem >My Orders</DropdownItem>
										<DropdownItem divider className="divider"  ></DropdownItem>
										<DropdownItem>Contact Us</DropdownItem>
										<DropdownItem>Privacy Policy</DropdownItem>
										<DropdownItem divider className="divider"  ></DropdownItem>
										<DropdownItem>Log out</DropdownItem>
									</DropdownMenu>
									</ButtonDropdown>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</div>
		);
	}
}
