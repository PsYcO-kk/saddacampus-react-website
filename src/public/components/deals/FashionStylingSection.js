import React from 'react';
import { Container, Col,  Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import faRupeeSign from '@fortawesome/fontawesome-free-solid/faRupeeSign';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = (props) => {
	const { className, style, onClick } = props;
	return(
		<div className={className} style={{ ...style, backgroundColor: 'black', borderRadius: '50%' }} onClick={onClick}>
		</div>
	)
};

export default class FashionStylingSection extends React.Component{
	render(){
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
			],
			nextArrow: <CustomArrow />,
			prevArrow: <CustomArrow />,
		};

		return(
			<Container className="single-category">
				<Row>
					<Col md={2}>
						<h4>Fashion & Styling</h4>
					</Col>
					<Col>
						<Link to="/deals" style={{ 'color': '#555', 'fontSize': '12px' }}>
							View All <FontAwesomeIcon icon={faChevronRight} />
						</Link>
					</Col>
				</Row>
				<div style={{ 'padding': '1%', 'paddingTop': '2%' }}>
					<Slider {...settings}>
						<div>
							<div className="thumb">
								<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
								<div>TGI Fridays | Up to <FontAwesomeIcon icon={faRupeeSign} />300 Cashback</div>
								<div className="deal-alert">Get Now</div>
							</div>
						</div>
						<div>
							<div className="thumb">
								<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
								<div>TGI Fridays | Up to <FontAwesomeIcon icon={faRupeeSign} />300 Cashback</div>
								<div className="deal-alert">Get Now</div>
							</div>
						</div>
						<div>
							<div className="thumb">
								<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
								<div>TGI Fridays | Up to <FontAwesomeIcon icon={faRupeeSign} />300 Cashback</div>
								<div className="deal-alert">Get Now</div>
							</div>
						</div>
						<div>
							<div className="thumb">
								<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
								<div>TGI Fridays | Up to <FontAwesomeIcon icon={faRupeeSign} />300 Cashback</div>
								<div className="deal-alert">Get Now</div>
							</div>
						</div>
						<div>
							<div className="thumb">
								<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
								<div>TGI Fridays | Up to <FontAwesomeIcon icon={faRupeeSign} />300 Cashback</div>
								<div className="deal-alert">Get Now</div>
							</div>
						</div>
					</Slider>
				</div>
			</Container>
		);
	}
}
