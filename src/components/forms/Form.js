import React, { Fragment } from 'react';
import NoPart from './NoPart.js';
import Otp from './Otp.js';
import Profile from './ProfileSetting.js';
import "./../../scripts/typewriter.js"



class FormPart extends React.Component 
{
	state = {
		   NoPart : true,
		   Otp    : false,
		   Profile : false
	       }
  
    render()
    {
        return(
     <section>
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-6 about-left">
					<div className="jumbotron bg-white">
						<h1 className="display-4">Making college life <span className="wrap typewrite" data-period="2000" data-type='[ "easier...", "smarter...", "better..."]'></span></h1>
						<br/>
						<form>
                            <NoPart display={this.state.NoPart} />
							<Otp display={this.state.Otp} />
							<Profile display={this.state.Profile} />
				
						</form>
					</div>
				</div>
				<div className="col-lg-6 about-right">
					<img className="img-fluid" src="./assets/images/image.jpg" alt=""/>
				</div>
			</div>
		</div>
	</section>
         
        )
    }
}

export default FormPart;