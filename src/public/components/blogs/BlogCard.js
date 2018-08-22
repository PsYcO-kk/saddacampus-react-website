import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart';
import faBookmark from '@fortawesome/fontawesome-free-regular/faBookmark';

const BlogCard = (props) => (
	<div className={"single-blog-card " + props.type}>
		<Row className="remove-extra-space">
			<Col md={4} className="remove-extra-space">
				<div className="thumb">
					<img className="img-fluid" src={"./assets/images/coffee.PNG"} alt="" />
					{/*<div className="show-off" />*/}
					<div className="category-tag">
						Animal
					</div>
				</div>
			</Col>
			<Col md={8} className="remove-extra-space">
				<div className="body">
					{/*<ul className="tags">
						<li><a href="#">Food</a></li>
						<li><a href="#">One.0</a></li>
					</ul>*/}
					<div>
						{
							props.type === 'small' ?
							(
								<h4>Saving the tigers of Whitehall</h4>
							) :
							(
								<h3>Saving the tigers of Whitehall</h3>
							)
						}
						{
							props.type === 'large' ?
							(
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore. efbhe ieivoeivb vevbeiv vebviebv vjebvebviebvv ebj</p>
							) :
							(
								props.type === 'small' ?
								(
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
								) :
								(
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.</p>
								)
							)
						}
					</div>
					<div className="blog-card-footer">
						<Row className="remove-extra-space">
							<FontAwesomeIcon icon={faPencilAlt} /> &nbsp; Ankit Kashyap
						</Row>
						<Row className="remove-extra-space">
							<Col md={6} className="remove-extra-space date">
								<FontAwesomeIcon icon={faClock} /> &nbsp; 2 December 2015
							</Col>
							<Col md={6} className="remove-extra-space actions">
								<span>
									<FontAwesomeIcon icon={faHeart} /> 1628
								</span>
								<span>
									<FontAwesomeIcon icon={faBookmark} />
								</span>
							</Col>
						</Row>
					</div>
				</div>
			</Col>
		</Row>
	</div>
);

export default BlogCard;
