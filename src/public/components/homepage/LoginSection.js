import React from 'react';
import NumberForm from './forms/NumberForm.js';
import OtpForm from './forms/OtpForm.js';
import ProfileSettings from './forms/ProfileSettings.js';
import ErrorBoundary from '../ErrorBoundary';
import Typewriter from './Typewriter';

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
			message: ''
		}
	}
	changeState = (newState) => {
		this.setState(() => newState);
	}
    render(){
        return(
			<section className="section-gap">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 about-left">
							<div className="jumbotron bg-white">
								<h1 className="display-4">Making college life <Typewriter strings={["easier...", "smarter...", "better..."]} typeSpeed={130} backSpeed={50} color={'#e8c900'} /></h1>
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
						</div>
						<div className="col-lg-6 about-right">
							<img className="img-fluid" src="./assets/images/image.jpg" alt=""/>
						</div>
					</div>
				</div>
			</section>
        );
    }
}
