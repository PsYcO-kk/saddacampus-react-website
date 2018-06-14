import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg';

const propTypes = {
	children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
	render() {

		// eslint-disable-next-line
		const { children, ...attributes } = this.props;

		return (
			<React.Fragment>
				<AppSidebarToggler className="d-lg-none" display="md" mobile />
				<AppNavbarBrand
					full={{ src: logo, width: 89, alt: 'Saddacampus Logo' }}
					minimized={{ src: logo, width: 30, alt: 'Saddacampus Logo' }}
				/>
				<AppSidebarToggler className="d-md-down-none" display="lg" />

				<Nav className="d-md-down-none" navbar>
					<NavItem className="px-3">
						<NavLink to="/dashboard" activeClassName="active" className="nav-link">Dashboard</NavLink>
					</NavItem>
					{/*<NavItem className="px-3">
						<NavLink to="/users" activeClassName="active" className="nav-link">Users</NavLink>
					</NavItem>
					<NavItem className="px-3">
						<NavLink to="/admins" activeClassName="active" className="nav-link">Administrators</NavLink>
					</NavItem>*/}
					<NavItem className="px-3">
						<NavLink to="/create-admin" activeClassName="active" className="nav-link">Craete Admin</NavLink>
					</NavItem>
				</Nav>
				<Nav className="ml-auto" navbar>
					{/*<NavItem className="d-md-down-none">
						<NavLink to="#" activeClassName="active" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
					</NavItem>*/}
					<AppHeaderDropdown direction="down">
						<DropdownToggle nav>
							<img src={'assets/images/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
						</DropdownToggle>
						<DropdownMenu right style={{ right: 'auto' }}>
							<DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
							<DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
							<DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
							<DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
							<DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
							<DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
							<DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
							<DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
							<DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
							<DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
							<DropdownItem divider />
							<DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
							<DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>
						</DropdownMenu>
					</AppHeaderDropdown>
				</Nav>
				{/*<AppAsideToggler className="d-md-down-none" />*/}
				{/*<AppAsideToggler className="d-lg-none" mobile />*/}
			</React.Fragment>
		);
	}
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
