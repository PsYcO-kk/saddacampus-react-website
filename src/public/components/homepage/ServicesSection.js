import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const ServicesSection = () => (
	<section className="section-gap-half">
		<div style={{ padding: '0 10%', textAlign: 'center' }}>
			<div>
				<h1>What Student-friendly services we offer?</h1>
				<p style={{ fontSize: '22px', lineHeight: '25px' }}>BTW, we already apologize we cannot do anything about your sem-backs and low attendance, but - </p>
			</div>
			<Row className="remove-extra-space">
				<Col md={3} className="remove-extra-space">
					<div style={{ margin: '7%', padding: '3%', color: '#2874f0', fontWeight: 'bold', borderBottom: '3px solid #2874f0' }}>
						<img src="./assets/images/application.png" className="img-fluid" />
						<div style={{ marginTop: '7%', fontSize: '20px' }}>Food Delivery</div>
					</div>
				</Col>
				<Col md={3} className="remove-extra-space">
					<div style={{ margin: '7%', padding: '3%', fontWeight: 'bold' }}>
						<img src="./assets/images/application.png" className="img-fluid" />
						<div style={{ marginTop: '7%', fontSize: '20px' }}>Video Lectures</div>
					</div>
				</Col>
				<Col md={3} className="remove-extra-space">
					<div style={{ margin: '7%', padding: '3%', fontWeight: 'bold' }}>
						<img src="./assets/images/application.png" className="img-fluid" />
						<div style={{ marginTop: '7%', fontSize: '20px' }}>Internships</div>
					</div>
				</Col>
				<Col md={3} className="remove-extra-space">
					<div style={{ margin: '7%', padding: '3%', fontWeight: 'bold' }}>
						<img src="./assets/images/application.png" className="img-fluid" />
						<div style={{ marginTop: '7%', fontSize: '20px' }}>Deals & Offers</div>
					</div>
				</Col>
			</Row>
		</div>

		<div>
			<Row className="remove-extra-space align-items-center">
				<Col md={5} className="remove-extra-space">
					<div className="thumb" style={{ textAlign: 'left', margin: '2% 0' }}>
						<img className="img-fluid" src="/assets/images/beauty-black-and-white-color-splash-46171.jpg" alt="" />
					</div>
				</Col>
				<Col md={7} className="remove-extra-space">
					<div style={{ margin: '3% 0 0 20%' }}>
						<div style={{ maxWidth: '350px' }}>
							<h1>Latest News from our Blog</h1>
							<p style={{ fontSize: '22px', lineHeight: '25px', margin: '7% 0' }}>There are always some things you need to know and once in college you need all the help available.</p>
							<Button outline color="primary" style={{ borderRadius: 0 }}>EXPLORE</Button>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	</section>
);

export default ServicesSection;
