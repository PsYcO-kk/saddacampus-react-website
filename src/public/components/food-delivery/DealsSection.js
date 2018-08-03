import React from 'react';
import Slider from "react-slick";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = (props) => {
	const { className, style, onClick } = props;
	return(
		<div className="carousel-arrow carousel-next" style={{ ...style }} onClick={onClick}>
			<FontAwesomeIcon icon={faChevronRight} />
		</div>
	)
};

const CustomPrevArrow = (props) => {
	const { className, style, onClick } = props;
	return(
		<div className="carousel-arrow carousel-prev" style={{ ...style }} onClick={onClick}>
			<FontAwesomeIcon icon={faChevronLeft} />
		</div>
	)
};

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
