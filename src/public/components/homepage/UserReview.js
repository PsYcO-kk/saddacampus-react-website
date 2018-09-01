import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import { Row, Col } from 'reactstrap';

const UserReview = (props) => (
	<div className="single-review">
		<Row className="remove-extra-space">
			<Col md={2} className="remove-extra-space">
				<div className="thumb">
					<img src="assets/images/avatars/1.jpg" width="40" style={{ 'borderRadius': '50%' }} />
				</div>
			</Col>
			<Col md={10} className="remove-extra-space">
				<Row className="remove-extra-space" style={{ height: 'auto', marginTop: '10px' }}>
					<Col md={9} className="remove-extra-space">
						<div>
							<h4>{props.username}</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
							</p>
						</div>
					</Col>
					<Col md={3} className="remove-extra-space">
						<div>1d ago</div>
					</Col>
				</Row>
				<Row className="remove-extra-space" style={{ height: 'auto' }}>
					<Col md={9} className="remove-extra-space">
						<div className="star">
							<FontAwesomeIcon icon={faStar} className="checked" />
							<FontAwesomeIcon icon={faStar} className="checked" />
							<FontAwesomeIcon icon={faStar} className="checked" />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
						</div>
					</Col>
					<Col md={3} className="remove-extra-space">
						<div>View More</div>
					</Col>
				</Row>
			</Col>
		</Row>
	</div>
);

export default UserReview;
