import React from 'react';

const Blog = (props) => (
	<div className="col-lg-6">
		<div className="single-latest-blog">
			<div className="thumb">
				<img className="img-fluid" src={"./assets/images/"+props.imgSrc} alt="" />
			</div>
			<ul className="tags">
				<li><a href="#">Food</a></li>
				<li><a href="#">One.0</a></li>
			</ul>
			<a href="#">
				<h4>Lorem ipsum dolor sit amet</h4>
			</a>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
			</p>
			<p className="date">31st January, 2018</p>
		</div>
	</div>
);

export default Blog;
