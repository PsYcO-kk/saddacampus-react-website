import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCopyright from '@fortawesome/fontawesome-free-regular/faCopyright';
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';

const Footer = () => (
	<footer className="footer">
		<Row className="remove-extra-space">
			<Col md={2} className="remove-extra-space division logo">
				<div className="body">
					<img className="img-fluid" src="/assets/images/brand/16-9.png" />
					<div><FontAwesomeIcon icon={faCopyright} /> Saddacampus LLP</div>
				</div>
			</Col>
			<Col md={3} className="remove-extra-space division">
				<div className="body">
				</div>
			</Col>
			<Col md={2} className="remove-extra-space division info">
				<div className="body">
					<div>About Us</div>
					<div>Contact</div>
					<div>Terms & Conditions</div>
				</div>
			</Col>
			<Col md={2} className="remove-extra-space division social">
				<div className="body">
					<div><FontAwesomeIcon icon={faFacebookF} style={{ marginRight: '7px' }} /> Facebook</div>
					<div><FontAwesomeIcon icon={faTwitter} style={{ marginRight: '7px' }} /> Twitter</div>
					<div><FontAwesomeIcon icon={faInstagram} style={{ marginRight: '7px' }} /> Instagram</div>
				</div>
			</Col>
			<Col md={3} className="remove-extra-space division address">
				<div className="body">
					<div>CIIE, IIT (ISM) Dhanbad,</div>
					<div>Jharkhand- 826004, India</div>
					<div>+91- 95237 39679</div>
					<div>info@saddacampus.com</div>
				</div>
			</Col>
		</Row>
	</footer>
);

export default Footer;
