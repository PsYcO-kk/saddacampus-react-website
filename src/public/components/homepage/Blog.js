import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faCommentAlt from '@fortawesome/fontawesome-free-solid/faCommentAlt';

const Blog = (props) => (
	<div className="col-lg-6">
		<div className="single-latest-blog">
			<div className="thumb">
				<img className="img-fluid" src={"./assets/images/"+props.imgSrc} alt="" />
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
				<div className="row">
					<div className="col">
						<FontAwesomeIcon icon={faHeart} className="likes" /> &nbsp; 628
					</div>
					<div className="col">
						<FontAwesomeIcon icon={faCommentAlt} className="comments" /> &nbsp; 628
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Blog;
