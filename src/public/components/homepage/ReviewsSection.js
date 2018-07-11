import React from 'react';
import Slider from "react-slick";
import UserReview from './UserReview';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewsSection = () => {
	const settings = {
		focusOnSelect: true,
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			}		]
	};
	return(
		<section className="reviews-area section-gap">
			<div className="container">
				<div className="row section-title">
					<h1>User Reviews</h1>
					<p>Who are extremely in love with our platform.</p>
				</div>
				<Slider {...settings}>
					<div>
						<UserReview username="Shubham" />
					</div>
					<div>
						<UserReview username="Saurabh Kabra" />
					</div>
					<div>
						<UserReview username="Sparsh Choudhary" />
					</div>
					<div>
						<UserReview username="Landon Houston" />
					</div>
					<div>
						<UserReview username="Nelle Wade" />
					</div>
					<div>
						<UserReview username="Jon Banks" />
					</div>
				</Slider>
			</div>
		</section>
	);
};

export default ReviewsSection;
