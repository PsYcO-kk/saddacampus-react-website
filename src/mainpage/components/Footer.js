import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

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
		<div className="container">
        <hr style={hrStyle} />
			<div className="row">
                <div className="col-lg-3">
					<img className="img-fluid float-left" src="/assets/images/brand/16-9.png" id="logo" />
				</div>
				<div className="col-lg-1"></div>
				<div className="col">
					<div align="right">
						<em>Saddacampus works with the motto of “making college life easier”. Saddacampus aims at becoming a ONE STOP SOLUTION for college students.</em>
					</div>
					<div style={tableDivStyle} align="center">
						<table style={tableStyle}>
							<tbody>
								<tr>
									<td align="center"><h5>Connect to us:</h5></td>
									<td><a href="https://www.facebook.com/saddacampus/"><FontAwesomeIcon icon={['fab', 'facebook-square']} size="3x" /></a></td>
									<td><a href="https://www.instagram.com/saddacampus/"><FontAwesomeIcon icon={['fab', 'instagram']} size="3x" /></a></td>
									<td><a href="https://www.linkedin.com/company/saddacampusllp/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" /></a></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<hr style={hrStyle} />
			<div className="row">
				<div className="col-lg-2">
					<h5>Phone</h5>
					<a href="tel:+919523739679">+91- 95237 39679</a>
				</div>
				<div className="col-lg-5">
					<h5>Address</h5>
					<span style={contentStyle}>CIIE, IIT(ISM) DHANBAD, DHANBAD, JHARKHAND, 826004, INDIA.</span>
				</div>
				<div className="col-lg-5">
					<h5>Additional Informations</h5>
					<span style={contentStyle}>
						Join the thousands of other restaurants who benefit from having their menus on TakeOff. To partner with us drop us a mail at <a href="mailto:info@saddacampus.com">info@saddacampus.com</a>
					</span>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
