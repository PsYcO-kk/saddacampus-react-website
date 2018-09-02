import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faRupeeSign from '@fortawesome/fontawesome-free-solid/faRupeeSign';

const SingleInternshipOpportunityPage = () => (
	<div className="single-internship-opportunity-page">
		<h3>UI/UX Developer Internship in Dhanbad at Saddacampus LLP</h3>
		<div className="body">
			<Row className="remove-extra-space align-items-center">
				<Col md={2} className="remove-extra-space">
					<div className="thumb">
						<img src="assets/images/coffee.PNG" className="img-fluid" />
					</div>
				</Col>
				<Col md={10} className="remove-extra-space">
					<div className="short-info">
						<div>UI/UX Developer</div>
						<div>Saddacampus LLP</div>
						<div><FontAwesomeIcon icon={faRupeeSign} /> Paid</div>
						<div>Locations(s): Dhanbad</div>
					</div>
				</Col>
			</Row>
			<Row className="remove-extra-space" style={{ borderBottom: '1px solid #555' }}>
				<Col md={3} className="remove-extra-space">
					<div className="important-info">
						<div>Start Date</div>
						<div>13th Aug 18</div>
					</div>
				</Col>
				<Col md={3} className="remove-extra-space">
					<div className="important-info">
						<div>Stipend</div>
						<div><FontAwesomeIcon icon={faRupeeSign} /> 5000/month</div>
					</div>
				</Col>
				<Col md={3} className="remove-extra-space">
					<div className="important-info">
						<div>Duration</div>
						<div>2 months</div>
					</div>
				</Col>
				<Col md={3} className="remove-extra-space">
					<div className="important-info">
						<div>Apply By</div>
						<div>25th Aug 18</div>
					</div>
				</Col>
			</Row>
			<div className="more-info">
				<div>About the Internship:</div>
				<p>
					Lorem ipsum dolor sit amet, no eam viderer contentiones, cum cu cibo partem interpretaris. Ei sea numquam noluisse. Eam ex paulo nonumy, te sumo alterum qui. Ut quo lorem aliquip, ex sensibus corrumpit contentiones cum. Nec veniam impetus ei, eum ei mazim eligendi mnesarchum. Qui id ubique recusabo, quo ut omnis impedit.
				</p>
			</div>
			<div className="more-info">
				<div># of Internships available: 1</div>
			</div>
			<div className="more-info">
				<div>Who can apply:</div>
				<p>
					Lorem ipsum dolor sit amet, no eam viderer contentiones, cum cu cibo partem interpretaris. Ei sea numquam noluisse. Eam ex paulo nonumy, te sumo alterum qui. Ut quo lorem aliquip, ex sensibus corrumpit contentiones cum. Nec veniam impetus ei, eum ei mazim eligendi mnesarchum. Qui id ubique recusabo, quo ut omnis impedit.
				</p>
			</div>
			<div className="more-info">
				<div>Other requirements:</div>
				<p>
					Lorem ipsum dolor sit amet, no eam viderer contentiones, cum cu cibo partem interpretaris. Ei sea numquam noluisse. Eam ex paulo nonumy, te sumo alterum qui. Ut quo lorem aliquip, ex sensibus corrumpit contentiones cum. Nec veniam impetus ei, eum ei mazim eligendi mnesarchum. Qui id ubique recusabo, quo ut omnis impedit.
				</p>
			</div>
			<div className="more-info">
				<div>Perks:</div>
				<p>
					Lorem ipsum dolor sit amet, no eam viderer contentiones, cum cu cibo partem interpretaris. Ei sea numquam noluisse. Eam ex paulo nonumy, te sumo alterum qui. Ut quo lorem aliquip, ex sensibus corrumpit contentiones cum. Nec veniam impetus ei, eum ei mazim eligendi mnesarchum. Qui id ubique recusabo, quo ut omnis impedit.
				</p>
			</div>
			<div className="more-info" style={{ textAlign: 'right' }}>
				<Button>Apply Now</Button>
			</div>
		</div>
	</div>
);

export default SingleInternshipOpportunityPage;
