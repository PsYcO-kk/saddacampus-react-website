import React from 'react';
import { Row, Col } from 'reactstrap';

import UserReview from './UserReview';

const ReviewsSection = () => {
	return(
		<section className="section-gap-half">
			<Row className="remove-extra-space align-items-center">
				<Col md={5} className="remove-extra-space">
					<div className="thumb" style={{ textAlign: 'left', margin: '2% 0' }}>
						<img className="img-fluid" src="/assets/images/beauty-black-and-white-color-splash-46171.jpg" alt="" />
					</div>
				</Col>
				<Col md={7} className="remove-extra-space">
					<div style={{ margin: '3% 0 0 20%' }}>
						<div style={{ maxWidth: '350px' }}>
							<h1>User Reviews</h1>
							<p style={{ fontSize: '22px', lineHeight: '25px', margin: '5% 0' }}>Who are extremely in love with our platform.</p>
						</div>
						<UserReview username="Shubham" />
					</div>
				</Col>
			</Row>
		</section>
	);
};

export default ReviewsSection;
