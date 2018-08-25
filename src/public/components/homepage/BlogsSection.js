import React from 'react';
import Blog from './Blog';
import { Link } from 'react-router-dom';

const BlogsSection  = () => (
    <section className="latest-blog-area section-gap">
		<div className="container">
			<div className="row section-title">
				<Link to="/blogs"><h1>Latest News from our Blog</h1></Link>
				<p>There are always some things you need to know and once in college you need all the help available.</p>
			</div>
			<div className="row" style={{ 'backgroundColor': 'black', 'padding': '3%' }}>
				<Blog imgSrc="coffee.PNG" />
				<Blog imgSrc="burger.PNG" />
				<Blog imgSrc="coffee.PNG" />
				<Blog imgSrc="burger.PNG" />
			</div>
		</div>
	</section>
);

export default BlogsSection;
