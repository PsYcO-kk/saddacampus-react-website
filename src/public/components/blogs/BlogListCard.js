import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart';

const BlogListCard = () => (
	<div className="blog-list-card">
		<h6>Why you can never eat just one oreo?</h6>
		<Row className="remove-extra-space">
			<Col md={6} className="remove-extra-space info">2 December 2015</Col>
			<Col md={6} className="remove-extra-space info"><FontAwesomeIcon icon={faHeart} /> 1683</Col>
		</Row>
	</div>
);

export default BlogListCard;
