import React from 'react';
import NumberForm from './forms/NumberForm.js';
import OtpForm from './forms/OtpForm.js';
import ProfileSettings from './forms/ProfileSettings.js';
import ErrorBoundary from '../ErrorBoundary';
import Typewriter from './Typewriter';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const loaderStyle = {
	"color": "#555"
};

export default class LoginSection extends React.Component{
	constructor(){
		super();
		this.state = {
			loading: false,
			NumberForm: true,
			OtpForm: false,
			ProfileSettings: false,
			country_code: '',
			number: '',
			otp: '',
			message: '',
			isOpen: false
		}
	}
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	changeState = (newState) => {
		this.setState(() => newState);
	}
    render(){
        return(
			<section>
				<div className="row align-items-center">
					<div className="col-lg-6 about-left">
						<Container>
							<Navbar color="light" light expand="lg" className="bg-white">
								<NavbarBrand href="/">
									<img src="/assets/images/brand/16-9.png" width="150" className="d-inline-block align-top" alt="" />
								</NavbarBrand>
								<NavbarToggler onClick={this.toggle} />
								<Collapse isOpen={this.state.isOpen} navbar>
									<Nav className="ml-auto" navbar>
										<NavItem>
											<a href="https://play.google.com/store/apps/details?id=com.saddacampus.app" className="nav-link">Get the App</a>
										</NavItem>
										<NavItem>
											<Link to="/about-us" className="nav-link">About Us</Link>
										</NavItem>
										<NavItem>
											<Link to="/help" className="nav-link">Help</Link>
										</NavItem>
									</Nav>
								</Collapse>
							</Navbar>
							<div className="jumbotron bg-white">
								<h1 className="display-4">
									Making college life
									<br />
									<Typewriter strings={["easier...", "smarter...", "better..."]} typeSpeed={130} backSpeed={50} color={'#e8c900'} />
								</h1>
								<br/>
								{this.state.loading &&
									<table>
										<tbody>
											<tr>
												<td><div id="sync"></div></td>
												<td>
													<h5 style={loaderStyle}>&nbsp; Loading...</h5>
												</td>
											</tr>
										</tbody>
									</table>
								}
								<br />
								<ErrorBoundary>
									{this.state.NumberForm && <NumberForm changeState={this.changeState} />}
									{this.state.OtpForm && <OtpForm changeState={this.changeState} message={this.state.message} country_code={this.state.country_code} number={this.state.number}/>}
									{this.state.ProfileSettings && <ProfileSettings country_code={this.state.country_code} number={this.state.number} />}
								</ErrorBoundary>
							</div>
						</Container>
					</div>
					<div className="col-lg-6 about-right">
						<img className="img-fluid" src="./assets/images/image.jpg" alt=""/>
					</div>
				</div>
			</section>
        );
    }
}
