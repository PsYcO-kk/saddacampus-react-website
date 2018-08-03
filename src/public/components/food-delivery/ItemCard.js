import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

const ItemCard = (props) => (
	<Col md={4} className="remove-extra-space">
		<div className="item-card">
			<div className="thumb">
				<img className="img-fluid" src={props.imgSrc} alt="" />
			</div>
			<div className="body">
				<h4>Chickblast</h4>
				<Row className="remove-extra-space">
					<Col md={6} className="remove-extra-space">
						North Indian
					</Col>
					<Col md={6} className="remove-extra-space" style={{ textAlign: 'right', fontWeight: 'bold' }}>
						<FontAwesomeIcon icon={faStar} style={{ color: '#f9d700' }} />&nbsp;4.5
					</Col>
				</Row>
				<Row className="remove-extra-space">
					<Col md={6} className="remove-extra-space">
						Min Order Rs. 100
					</Col>
					<Col md={6} className="remove-extra-space" style={{ textAlign: 'right' }}>
						Free Delivery
					</Col>
				</Row>
			</div>
		</div>
	</Col>
);

export default ItemCard;
