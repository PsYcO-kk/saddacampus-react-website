import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faCommentAlt from '@fortawesome/fontawesome-free-solid/faCommentAlt';

const BlogCard = () => (
	<div className="single-blog">
		<div className="thumb">
			<img className="img-fluid" src={"./assets/images/coffee.PNG"} alt="" />
		</div>
		<div className="body">
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
			{/*<p className="date">31st January, 2018</p>*/}
			<div className="row actions">
				<div className="col">
					<FontAwesomeIcon icon={faHeart} className="likes" /> 628
				</div>
				<div className="col">
					<FontAwesomeIcon icon={faCommentAlt} className="comments" /> 628
				</div>
				<div className="col" className="share">
					SHARE
				</div>
			</div>
		</div>
	</div>
);

export default BlogCard;
