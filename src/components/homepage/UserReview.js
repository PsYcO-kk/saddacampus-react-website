import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

const UserReview = (props) => (
	<div className="col-lg-4 col-md-6">
		<div className="single-review">
			<h4>{props.username}</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
			</p>
			<div className="star">
				<FontAwesomeIcon icon={faStar} className="checked" />
				<FontAwesomeIcon icon={faStar} className="checked" />
				<FontAwesomeIcon icon={faStar} className="checked" />
				<FontAwesomeIcon icon={faStar} />
				<FontAwesomeIcon icon={faStar} />
			</div>
		</div>
	</div>
);

export default UserReview;
