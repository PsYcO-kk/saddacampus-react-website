import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEye from '@fortawesome/fontawesome-free-regular/faEye';

const DealCard = (props) => (
	<Col md={4} className="remove-extra-space">
		<div className="single-deal-card" onClick={()=>{props.handleRequestOpenModal()}}>
			<Row className="remove-extra-space">
				<Col md={4} className="remove-extra-space">
					<div className="thumb">
						<img className="img-fluid" src={"./assets/images/coffee.PNG"} alt="" />
					</div>
				</Col>
				<Col md={8} className="remove-extra-space">
					<div className="deal-card-body">
						<h6>Domino's pizza</h6>
						<h4>Buy one Get one FREE on all takeaways</h4>
					</div>
					<Row className="remove-extra-space deal-card-footer">
						<Col md={6} className="remove-extra-space">
							<FontAwesomeIcon icon={faEye} /> 1,364 views
						</Col>
						<Col md={6} className="remove-extra-space" style={{ textAlign: 'right' }}>
							<b>Valid Till</b> 12-12-2018
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	</Col>
);

export default DealCard;
