import React from 'react';
import { Row, Col } from 'reactstrap';

import VideoLectureCard from './VideoLectureCard';

const CategoryLecturesSection = () => (
	<div className="lectures-single-section">
		<h3>COMPUTING</h3>
		<Row className="remove-extra-space">
			<VideoLectureCard />
			<VideoLectureCard />
			<VideoLectureCard />
			<VideoLectureCard />
		</Row>
		<div className="view-more">View More</div>
	</div>
);

export default CategoryLecturesSection;
