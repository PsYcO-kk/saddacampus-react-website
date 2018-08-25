import React from 'react';
import NumberForm from './forms/NumberForm.js';
import OtpForm from './forms/OtpForm.js';
import ProfileSettings from './forms/ProfileSettings.js';
import ErrorBoundary from '../ErrorBoundary';
import Typewriter from './Typewriter';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
			isOpen: false,
			windowHeight: 650,
			windowWidth: 650
		}
	}
	componentDidMount(){
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions);
	}
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	changeState = (newState) => {
		this.setState(() => newState);
	}
	updateDimensions = () => {
		this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

    render(){
        return(
			<section style={{ 'minHeight': this.state.windowHeight+'px' }}>
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
											<a href="https://play.google.com/store/apps/details?id=com.saddacampus.app" className="nav-link" style={{ 'fontWeight': 'bold' }}>Get the App</a>
										</NavItem>
										<NavItem>
											<Link to="/about-us" className="nav-link" style={{ 'fontWeight': 'bold' }}>About Us</Link>
										</NavItem>
										<NavItem>
											<Link to="/help" className="nav-link" style={{ 'fontWeight': 'bold' }}>Help</Link>
										</NavItem>
									</Nav>
								</Collapse>
							</Navbar>
							<div className="jumbotron bg-white">
								<h2 className="display-4" style={{ 'marginBottom': '3%' }}>
									Making college life
									<br />
									<Typewriter strings={["easier...", "smarter...", "better..."]} typeSpeed={130} backSpeed={50} color={'#e8c900'} />
								</h2>
								{this.state.loading &&
									<table style={{ 'marginBottom': '1%' }}>
										<tbody>
											<tr>
												<td><div id="sync"></div></td>
												<td>
													<h5 style={{ 'color': '#555' }}>&nbsp; Loading...</h5>
												</td>
											</tr>
										</tbody>
									</table>
								}
								<ErrorBoundary>
									{this.state.NumberForm && <NumberForm changeState={this.changeState} />}
									{this.state.OtpForm && <OtpForm changeState={this.changeState} message={this.state.message} country_code={this.state.country_code} number={this.state.number}/>}
									{this.state.ProfileSettings && <ProfileSettings country_code={this.state.country_code} number={this.state.number} />}
								</ErrorBoundary>
							</div>
						</Container>
					</div>
					<div className="col-lg-6 about-right">
						<img className="img-fluid" src="./assets/images/image.jpg" alt="" style={{ 'minWidth': (this.state.windowWidth/2 - 9)+'px', 'minHeight': this.state.windowHeight+'px' }} />
					</div>
				</div>
			</section>
        );
    }
}
