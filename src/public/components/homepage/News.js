import React from 'react';

const News = (props) => (
	<div className="single-news">
		<div>
			<p style={{ fontFamily: 'Lato, Regular', fontSize: '16px' }}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
			</p>
			<h2 style={{ fontFamily: '' }}>{props.telegraphName ? props.telegraphName : 'Unknown Source'}</h2>
		</div>
		<span>
			<img src="./assets/images/svg/hangouts.svg" className="img-fluid" width="50" />
		</span>
	</div>
);

export default News;
