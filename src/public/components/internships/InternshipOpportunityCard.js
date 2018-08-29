import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBookmark from '@fortawesome/fontawesome-free-regular/faBookmark';
import faRupeeSign from '@fortawesome/fontawesome-free-solid/faRupeeSign';
import faEye from '@fortawesome/fontawesome-free-regular/faEye';

const InternshipOpportunityCard = () => (
	<Col md={4} className="remove-extra-space">
		<div className="internship-opportunity-card">
			<span><FontAwesomeIcon icon={faBookmark} /></span>
			<Row className="remove-extra-space">
				<Col md={4} className="remove-extra-space">
					<div className="thumb">
						<img src="./assets/images/coffee.PNG" className="img-fluid" />
					</div>
				</Col>
				<Col md={8} className="remove-extra-space">
					<div className="company-details">
						<div style={{ fontWeight: 'bold'}}>UI/UX Developer</div>
						<div className="single-detail">Saddacampus LLP</div>
						<div className="single-detail"><FontAwesomeIcon icon={faRupeeSign} /> Paid</div>
						<div className="single-detail">Location(s): Dhanbad</div>
						<div className="single-detail"><FontAwesomeIcon icon={faEye} /> 1,364 views</div>
					</div>
				</Col>
			</Row>
			<Row className="remove-extra-space">
				<Col md={4} className="remove-extra-space">
					<div>
						<div style={{ fontWeight: 'bold'}} >Start Date</div>
						<div>18th Aug 18</div>
					</div>
				</Col>
				<Col md={4} className="remove-extra-space">
					<div>
						<div style={{ fontWeight: 'bold'}} >Duration</div>
						<div>2 months</div>
					</div>
				</Col>
				<Col md={4} className="remove-extra-space">
					<div>
						<div style={{ fontWeight: 'bold'}} >Apply By</div>
						<div>25th Aug 18</div>
					</div>
				</Col>
			</Row>
		</div>
	</Col>

);

export default InternshipOpportunityCard;
