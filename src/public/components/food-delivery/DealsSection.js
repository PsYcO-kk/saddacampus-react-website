import React from 'react';
import Slider from "react-slick";

import { CustomNextArrow, CustomPrevArrow } from '../CustomCarouselArrows';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
	infinite: true,
	autoplay: true,
	speed: 500,
	// autoplaySpeed: 500,
	slidesToScroll: 1,
	slidesToShow: 4,
	swipeToSlide: true,
	// cssEase: "linear",
	nextArrow: <CustomNextArrow />,
	prevArrow: <CustomPrevArrow />,
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

const DealsSection = () => (
	<div className="deals-carousel">
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
		</Slider>
	</div>
);

export default DealsSection;
