import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import "./../styles/footer.css"

const tableDivStyle = {
	"paddingTop": "5%"
};

const tableStyle = {
	"minWidth": "100%"
};

const hrStyle = {
	"paddingTop": "1%",
	"paddingBottom": "1%"
};

const contentStyle = {
	"fontWeight": "normal"
};


const Footer = () => (
	<footer className="footer">
		<div className="container parent ">
        <hr className="hr" />
			<div className="row">
                <div className="col-md-2">
					<img className="img-fluid float-left" src="/assets/images/brand/16-9.png" id="logo" />
				</div>
				<div className="col-md-6 motto"  >
					<em>Saddacampus works with the motto of “making college life easier”. Saddacampus aims at becoming a ONE STOP SOLUTION for college students.</em>
                </div> 
				<div className="col-md-3 icons ">
					<table >
							<tbody>
								<tr>
									<td><a href="https://www.facebook.com/saddacampus/"><FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x" className="iconImg" /></a></td>
									<td><a href="https://www.instagram.com/saddacampus/"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" className="iconImg" /></a></td>
									<td><a href="https://www.linkedin.com/company/saddacampusllp/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="iconImg" /></a></td>
								</tr>
							</tbody>
					</table>
				</div>	
			</div>
		
			<div className="row detailsRow">
				<div className="col-md-6 ">
					<div>
						<h5 className="contactUs" >Contact Us</h5>
						<div className="contactDetails" >
							<span className="details" ><a href="tel:+919523739679" className="links" >+91- 95237 39679</a></span>
							<span className="details" ><a href="email:abc@saddacampus.com" className="links" >abc@saddacampus.com</a></span>
							<span className="details" >CIIE, IIT(ISM) DHANBAD</span>
							<span className="details" >DHANBAD, JHARKHAND</span>
							<span className="details" > 826004, INDIA</span>
						</div>	
					</div>	
				</div>
				<div className="col-md-6 additionalInfo">
					<div>
						<h5>Additional Imformation</h5>
						<span>Join the thousands of other restaurants who benefit from having their menus on TakeOff.
						To partner with us drop us a mail at <a href="mailto:info@saddacampus.com" className="links">info@saddacampus.com</a>
						</span>
					</div>
				</div>	

			</div>
		</div>
	</footer>
);

export default Footer;
