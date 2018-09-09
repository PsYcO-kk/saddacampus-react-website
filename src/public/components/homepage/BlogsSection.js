import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const BlogsSection  = () => (
    <section className="section-gap-half">
		<Row className="remove-extra-space align-items-center">
			<Col md={5} className="remove-extra-space">
				<div style={{ margin: '0 20%' }}>
					<div style={{ textAlign: 'right' }}>
						<h1 style={{ fontFamily: 'Lato, Black' }}>Latest News from our Blog</h1>
						<p style={{ fontFamily: 'Lato, Regular', fontSize: '20px', lineHeight: '23px', margin: '7% 0' }}>There are always some things you need to know and once in college you need all the help available.</p>
						<Button outline color="primary" style={{ borderRadius: 0 }}>VIEW BLOG</Button>
					</div>
				</div>
			</Col>
			<Col md={7} className="remove-extra-space">
				<div className="thumb" style={{ textAlign: 'right', margin: '2% 0' }}>
					<img className="img-fluid" src="/assets/images/beauty-black-and-white-color-splash-46171.jpg" alt="" />
				</div>
			</Col>
		</Row>
	</section>
);

export default BlogsSection;
