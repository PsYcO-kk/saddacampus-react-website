import React from 'react';

import BlogListCard from './BlogListCard';

const BlogPageLeftSidebar = () => (
	<div className="left-sidebar">
		<div className="blogs-section">
			<h4>TRENDING</h4>
			<BlogListCard />
			<BlogListCard />
		</div>
		<div className="blogs-section">
			<h4>SADDABLOG</h4>
			<BlogListCard />
			<BlogListCard />
		</div>
	</div>
);

export default BlogPageLeftSidebar;
