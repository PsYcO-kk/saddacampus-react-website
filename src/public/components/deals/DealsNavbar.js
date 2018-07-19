import React from 'react';
import { Container } from 'reactstrap';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
	infinite: false,
	speed: 500,
	slidesToScroll: 1,
	slidesToShow: 4,
	swipeToSlide: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
};

const DealsNavbar = () => (
	<div className="deals-header">
		<Container>
			<Slider {...settings}>
				<div>
					<div className="thumb">
						<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
					</div>
				</div>
				<div>
					<div className="thumb">
						<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
					</div>
				</div>
				<div>
					<div className="thumb">
						<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
					</div>
				</div>
				<div>
					<div className="thumb">
						<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
					</div>
				</div>
				<div>
					<div className="thumb">
						<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
					</div>
				</div>
				<div>
					<div className="thumb">
						<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
					</div>
				</div>
				<div>
					<div className="thumb">
						<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
					</div>
				</div>
				<div>
					<div className="thumb">
						<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
					</div>
				</div>
			</Slider>
			<div className="row section-title">
				<h1>Deals from all around</h1>
				<p>There are always some things you need to know and once in college you need all the help available.</p>
			</div>
		</Container>
	</div>
);

export default DealsNavbar;
