import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';

const UserReview = (props) => (
	<Card className="single-review">
		<Container>
			<Row>
				<Col md={3}><img src="assets/images/avatars/1.jpg" style={{ 'borderRadius': '50%' }} /></Col>
				<Col md={9}>
					<CardTitle style={{ 'paddingTop': '5%' }}><a href="#"><h4>{props.username}</h4></a></CardTitle>
					<CardSubtitle style={{ 'fontSize': '12px', 'fontWeight': 'normal' }}>1d ago</CardSubtitle>
					<CardBody style={{ 'padding': '0', 'paddingTop': '5%' }}>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
						</CardText>
						<div className="star">
							<FontAwesomeIcon icon={faStar} className="checked" />
							<FontAwesomeIcon icon={faStar} className="checked" />
							<FontAwesomeIcon icon={faStar} className="checked" />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
						</div>
					</CardBody>
				</Col>
			</Row>
		</Container>
	</Card>
);

export default UserReview;
