import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEye from '@fortawesome/fontawesome-free-regular/faEye';

const VideoLectureCard = () => (
	<Col md={3} className="remove-extra-space">
		<div className="video-lecture-card">
			<div className="thumb">
				<img src="./assets/images/coffee.PNG" className="img-fluid" />
			</div>
			<div className="body">
				<h5>Machine Learning</h5>
				<p>
					Learn the prnciples underlying art creation, so you can draw paint and illustrate art with confidence and skill.
				</p>
				<div className="lecture-card-footer">
					<div><FontAwesomeIcon icon={faEye} /> 1,364 views</div>
					<Row className="remove-extra-space">
						<Col md={6} className="remove-extra-space">
							<div>Ankit Kashyap</div>
						</Col>
						<Col md={6} className="remove-extra-space">
							<div style={{ textAlign: 'right' }}>Artificial Intelligence</div>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	</Col>
);

export default VideoLectureCard;
