import React from 'react';
import { Row, Col } from 'reactstrap';

import InternshipOpportunityCard from './InternshipOpportunityCard';

const InternshipsSection = () => (
	<div>
		<div className="internships-section">
			<h3>MARKETING INTERNSHIP</h3>
			<Row className="remove-extra-space">
				<InternshipOpportunityCard />
				<InternshipOpportunityCard />
				<InternshipOpportunityCard />
				<InternshipOpportunityCard />
				<InternshipOpportunityCard />
				<InternshipOpportunityCard />
				<InternshipOpportunityCard />
				<InternshipOpportunityCard />
				<InternshipOpportunityCard />
				<InternshipOpportunityCard />
				<InternshipOpportunityCard />
				<InternshipOpportunityCard />
			</Row>
		</div>
	</div>
);

export default InternshipsSection;
