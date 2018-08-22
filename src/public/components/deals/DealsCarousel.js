import React from 'react';
import { Container } from 'reactstrap';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
	infinite: false,
	speed: 500,
	slidesToScroll: 1,
	slidesToShow: 9,
	swipeToSlide: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 7,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}
	]
};

const DealsCarousel = () => (
	<div className="deals-page-carousel">
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
		</Container>
	</div>
);

export default DealsCarousel;
