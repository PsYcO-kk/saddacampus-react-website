import React from 'react';
import { Col, Row } from 'reactstrap';

const GetAppSection = () => (
	<section className="section-gap-half">
		<Row className="remove-extra-space align-items-center">
			<Col md={5} className="remove-extra-space">
				<div style={{ margin: '0 20%'}}>
					<h1>Get the app</h1>
					<h1>Order by Tap.</h1>
					<p style={{ fontSize: '22px', lineHeight: '25px', margin: '5% 0' }}>Download the app now and let your fingers do the rest.</p>
					<div>
						<a href="https://play.google.com/store/apps/details?id=com.saddacampus.app">
							<img className="img-fluid" src="/assets/images/google-play-badge.png" width="200" alt="" />
						</a>
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

export default GetAppSection;
