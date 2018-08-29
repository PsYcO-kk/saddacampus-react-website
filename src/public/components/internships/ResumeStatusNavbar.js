import React from 'react';
import { Row, Col, Progress, Button } from 'reactstrap';

const ResumeStatusNavbar = () => (
	<div className="resume-status-navbar">
		<Row className="remove-extra-space">
			<Col md={4} className="remove-extra-space">
			</Col>
			<Col md={2} className="remove-extra-space">
				<div class="inner-body" style={{ textAlign: 'right' }}>
					Resume Completion Status
				</div>
			</Col>
			<Col md={4} className="remove-extra-space">
				<div class="inner-body">
					<Progress value={60}>60%</Progress>
				</div>
			</Col>
			<Col md={2} className="remove-extra-space">
				<div class="inner-body">
					<Button>Complete Now</Button>
				</div>
			</Col>
		</Row>
	</div>
);

export default ResumeStatusNavbar;
