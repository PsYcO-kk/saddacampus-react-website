import React from 'react';
import News from './News';

const NewsSection = () => (
   	<section className="news-area section-gap">
		<div className="container">
			<div className="row section-title">
				<h1>In the News</h1>
				<p>We love attention.</p>
			</div>
			<div className="row">
				<News telegraphName="The Telegraph" />
				<News telegraphName="The Telegraph" />
				<News telegraphName="The Telegraph" />
				<News telegraphName="The Telegraph" />
				<News telegraphName="The Telegraph" />
				<News telegraphName="The Telegraph" />
			</div>
		</div>
	</section>
);

export default NewsSection;
