import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart';
import faBookmark from '@fortawesome/fontawesome-free-regular/faBookmark';
import faPaperPlane from '@fortawesome/fontawesome-free-regular/faPaperPlane';

import BlogPageLeftSidebar from './BlogPageLeftSidebar';

const BlogPage = () => (
	<Row className="remove-extra-space single-blog-page">
		<Col md={3} className="remove-extra-space">
			<BlogPageLeftSidebar />
		</Col>
		<Col md={6} className="remove-extra-space">
			<Row className="remove-extra-space short-info" style={{ height: 'auto' }}>
				<Col md={7} className="remove-extra-space">
					<div className="body">
						<h2>Why you can never eat just one oreo?</h2>
						<h5>The surprising science behind our most unfortunate eating habits</h5>
						<Row className="remove-extra-space" style={{ height: 'auto' }}>
							<FontAwesomeIcon icon={faPencilAlt} /> &nbsp; Ankit Kashyap
						</Row>
						<Row className="remove-extra-space" style={{ height: 'auto' }}>
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
				</Col>
				<Col md={5} className="remove-extra-space">
					<div className="thumb">
						<img className="img-fluid" src="assets/images/burger.PNG" />
						<div className="category-tag">
							Animal
						</div>
					</div>
				</Col>
			</Row>
			<Row className="remove-extra-space">
				<Col md={1} className="remove-extra-space">
					<div className="actions-menu">
						<div className="single-action">
							<FontAwesomeIcon icon={faHeart} />
							<div className="action-count">1630</div>
						</div>
						<div className="single-action">
							<FontAwesomeIcon icon={faPaperPlane} />
							<div className="action-count">430</div>
						</div>
						<div className="single-action">
							<FontAwesomeIcon icon={faBookmark} />
						</div>
					</div>
				</Col>
				<Col md={11} className="remove-extra-space content">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Aenean placerat. Aenean fermentum risus id tortor. Aliquam erat volutpat. Nulla est. Nulla pulvinar eleifend sem. Quisque porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut tempus purus at lorem.

					Integer in sapien. Nullam rhoncus aliquam metus. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Aliquam id dolor. In dapibus augue non sapien. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Quisque tincidunt scelerisque libero. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Suspendisse sagittis ultrices augue. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Vestibulum fermentum tortor id mi. Suspendisse sagittis ultrices augue. In dapibus augue non sapien. Nulla est.

					Curabitur vitae diam non enim vestibulum interdum. Integer vulputate sem a nibh rutrum consequat. Etiam posuere lacus quis dolor. Phasellus rhoncus. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Mauris tincidunt sem sed arcu. Aenean vel massa quis mauris vehicula lacinia. Fusce suscipit libero eget elit. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nunc tincidunt ante vitae massa. In convallis. Vestibulum fermentum tortor id mi.

					Integer imperdiet lectus quis justo. Nunc auctor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris elementum mauris vitae tortor. Mauris dictum facilisis augue. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Integer lacinia. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Etiam bibendum elit eget erat. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Etiam bibendum elit eget erat. Vivamus ac leo pretium faucibus.

					Phasellus faucibus molestie nisl. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Donec vitae arcu. In dapibus augue non sapien. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin mattis lacinia justo. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.

					Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. In dapibus augue non sapien. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Suspendisse nisl. Maecenas sollicitudin. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Maecenas lorem. Phasellus et lorem id felis nonummy placerat. Fusce consectetuer risus a nunc. Proin in tellus sit amet nibh dignissim sagittis. Fusce wisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean placerat. In dapibus augue non sapien. Integer malesuada. Morbi scelerisque luctus velit.

					Integer imperdiet lectus quis justo. Etiam posuere lacus quis dolor. Aenean vel massa quis mauris vehicula lacinia. Etiam posuere lacus quis dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Phasellus et lorem id felis nonummy placerat. Cras elementum. Duis condimentum augue id magna semper rutrum. Etiam neque. Fusce aliquam vestibulum ipsum. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante.

					In convallis. Praesent dapibus. Fusce wisi. Aliquam ante. Aliquam id dolor. Integer imperdiet lectus quis justo. Nullam at arcu a est sollicitudin euismod. Etiam posuere lacus quis dolor. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Nulla non lectus sed nisl molestie malesuada. Nulla quis diam. Suspendisse sagittis ultrices augue.

					Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nullam eget nisl. Nullam at arcu a est sollicitudin euismod. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Curabitur bibendum justo non orci. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Integer tempor. Mauris dictum facilisis augue. Fusce nibh. Etiam dictum tincidunt diam. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Donec vitae arcu. Fusce nibh. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Quisque porta. Fusce consectetuer risus a nunc. Maecenas aliquet accumsan leo.

					Fusce aliquam vestibulum ipsum. Pellentesque arcu. Nulla non lectus sed nisl molestie malesuada. Praesent id justo in neque elementum ultrices. Nullam rhoncus aliquam metus. Etiam quis quam. Integer lacinia. Praesent in mauris eu tortor porttitor accumsan. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Fusce aliquam vestibulum ipsum. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Sed convallis magna eu sem. Fusce consectetuer risus a nunc. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Proin mattis lacinia justo.
				</Col>
			</Row>
		</Col>
		<Col md={3} className="remove-extra-space">
		</Col>
	</Row>
);

export default BlogPage;
