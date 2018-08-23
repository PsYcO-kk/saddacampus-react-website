import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';

export const CustomNextArrow = (props) => {
	const { className, style, onClick, nextArrowStyle } = props;
	return(
		<div className="carousel-arrow carousel-next" style={{ ...style, ...nextArrowStyle }} onClick={onClick}>
			<FontAwesomeIcon icon={faArrowRight} />
		</div>
	)
};

export const CustomPrevArrow = (props) => {
	const { className, style, onClick, prevArrowStyle } = props;
	return(
		<div className="carousel-arrow carousel-prev" style={{ ...style, ...prevArrowStyle }} onClick={onClick}>
			<FontAwesomeIcon icon={faArrowLeft} />
		</div>
	)
};
