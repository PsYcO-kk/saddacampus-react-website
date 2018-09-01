import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Col, Row } from 'reactstrap';

import News from './News';

const NewsSection = () => (
	<Parallax
		bgImage={'assets/images/beauty-black-and-white-color-splash-46171.jpg'}
		bgImageAlt="background"
		bgStyle={{ filter: 'brightness(50%)' }}
		// className=""
		strength={500}
	>
		<section className="section-gap-half">
			<Row className="remove-extra-space align-items-center">
				<Col md={6} className="remove-extra-space">
					<div style={{ padding: '0 20%'}}>
						<h1 style={{ color: '#fff' }}>In the News</h1>
						<div style={{ fontSize: '22px', lineHeight: '25px', margin: '5% 0', color: '#fff' }}>
							<div>Who doesn't like attention?</div>
							<div>Gladly we get it a lot.</div>
						</div>
					</div>
				</Col>
				<Col md={6} className="remove-extra-space">
					<News telegraphName="The Telegraph" />
				</Col>
			</Row>
		</section>
	</Parallax>
);

export default NewsSection;
