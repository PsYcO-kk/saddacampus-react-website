import React from 'react';
import Blog from './Blog';

const BlogsSection  = () => (
    <section className="latest-blog-area section-gap">
		<div className="container">
			<div className="row section-title">
				<h1>Latest News from our Blog</h1>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
			<div className="row">
				<Blog imgSrc="coffee.PNG" />
				<Blog imgSrc="burger.PNG" />
			</div>
		</div>
	</section>
);

export default BlogsSection;
