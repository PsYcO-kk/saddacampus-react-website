import React from 'react';
import { Row, Col } from 'reactstrap';

import Header from '../Header';
import ResumeStatusNavbar from './ResumeStatusNavbar';
import FilterSection from './FilterSection';
import InternshipsSection from './InternshipsSection';
import Footer from '../Footer';

const DefaultStructure = () => (
	<div>
		<Header />
		<ResumeStatusNavbar />
		<Row className="remove-extra-space internships-page">
			<Col md={3} className="remove-extra-space">
				<FilterSection />
			</Col>
			<Col md={9} className="remove-extra-space">
				<InternshipsSection />
			</Col>
		</Row>
		<Footer />
	</div>
);

export default DefaultStructure;
