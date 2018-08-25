import React from 'react';
import { Row, Col } from 'reactstrap';

import BlogCard from './BlogCard';

const BlogsSection = (props) => (
	<div className="blogs-section">
		<h3>FEATURED</h3>
		{
			props.type === "featured" ?
				(
					<Row className="remove-extra-space">
						<Col md={7} className="remove-extra-space">
							<BlogCard type="large" />
						</Col>
						<Col md={5} className="remove-extra-space">
							<BlogCard type="small" />
							<BlogCard type="small" />
						</Col>
					</Row>
				) :
				(
					<Row className="remove-extra-space">
						<Col md={6} className="remove-extra-space">
							<BlogCard type="medium" />
						</Col>
						<Col md={6} className="remove-extra-space">
							<BlogCard type="medium" />
						</Col>
					</Row>
				)
		}
		<div style={{ textAlign: 'right', paddingTop: '2%', marginRight: '2%' }}>
			View More
		</div>
	</div>
);

export default BlogsSection;
