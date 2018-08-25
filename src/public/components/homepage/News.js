import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

const News = (props) => (
	<div className="col-lg-4 col-md-6">
		<div className="single-news">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
			</p>
			<h4>{props.telegraphName ? props.telegraphName : 'Unknown Source'}</h4>
		</div>
	</div>
);

export default News;
