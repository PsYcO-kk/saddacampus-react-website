import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlayCircle from '@fortawesome/fontawesome-free-regular/faPlayCircle';
import faEye from '@fortawesome/fontawesome-free-regular/faEye';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';

const SingleVideoLecturePage = () => (
	<div className="single-video-lecture-page">
		<Row className="remove-extra-space">
			<Col md={3} className="remove-extra-space">
				<div className="contents">
					<h3>CONTENTS</h3>
					<ul>
						<li>
							<FontAwesomeIcon icon={faPlayCircle} />
							<span>Variables</span>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlayCircle} />
							<span>Variables</span>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlayCircle} />
							<span>Variables</span>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlayCircle} />
							<span>Variables</span>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlayCircle} />
							<span>Variables</span>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlayCircle} />
							<span>Variables</span>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlayCircle} />
							<span>Variables</span>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlayCircle} />
							<span>Variables</span>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlayCircle} />
							<span>Variables</span>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlayCircle} />
							<span>Variables</span>
						</li>
					</ul>
				</div>
			</Col>
			<Col md={9} className="remove-extra-space">
				<div className="lesson">
					<h2>Into to JS: Drawing and Animation</h2>
					<div>
						<span>Shubham Gora</span>
						<span>
							<FontAwesomeIcon icon={faEye} /> 12,543 Views
						</span>
					</div>
					<div className="media">
						<img src="/assets/images/beauty-black-and-white-color-splash-46171.jpg" className="img-fluid" />
					</div>
					<div className="content">
						<h4>Animation Basics</h4>
						<p>
							Lorem ipsum dolor sit amet, no eam viderer contentiones, cum cu cibo partem interpretaris. Ei sea numquam noluisse. Eam ex paulo nonumy, te sumo alterum qui. Ut quo lorem aliquip, ex sensibus corrumpit contentiones cum. Nec veniam impetus ei, eum ei mazim eligendi mnesarchum. Qui id ubique recusabo, quo ut omnis impedit.
						</p>
					</div>
					<div className="switch-lesson">
						<span><FontAwesomeIcon icon={faChevronLeft} /> Previous</span>
						<span>Next <FontAwesomeIcon icon={faChevronRight} /></span>
					</div>
				</div>
			</Col>
		</Row>
	</div>
);

export default SingleVideoLecturePage;
