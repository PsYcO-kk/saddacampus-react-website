import React from 'react';
import { Container, Col,  Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';

export default class CategoriesSection extends React.Component{
	render(){
		return(
			<Container className="categories-area">
				<Row>
					<Col md={2}>
						<h4>Categories</h4>
					</Col>
					<Col>
						<Link to="/deals" style={{ 'color': '#555', 'fontSize': '12px' }}>
							View All <FontAwesomeIcon icon={faChevronRight} />
						</Link>
					</Col>
				</Row>
				<Row style={{ 'padding': '1%', 'paddingTop': '2%' }}>
					<Col md={1} className="thumb">
						<div>
							<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
							<div>Food & Drinks</div>
						</div>
					</Col>
					<Col md={1} className="thumb">
						<div>
							<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
							<div>Food & Drinks</div>
						</div>
					</Col>
					<Col md={1} className="thumb">
						<div>
							<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
							<div>Food & Drinks</div>
						</div>
					</Col>
					<Col md={1} className="thumb">
						<div>
							<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
							<div>Food & Drinks</div>
						</div>
					</Col>
					<Col md={1} className="thumb">
						<div>
							<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
							<div>Food & Drinks</div>
						</div>
					</Col>
					<Col md={1} className="thumb">
						<div>
							<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
							<div>Food & Drinks</div>
						</div>
					</Col>
					<Col md={1} className="thumb">
						<div>
							<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
							<div>Food & Drinks</div>
						</div>
					</Col>
					<Col md={1} className="thumb">
						<div>
							<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
							<div>Food & Drinks</div>
						</div>
					</Col>
					<Col md={1} className="thumb">
						<div>
							<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
							<div>Food & Drinks</div>
						</div>
					</Col>
					<Col md={1} className="thumb">
						<div>
							<img className="img-fluid" src="assets/images/bright-color-eyes-413998.jpg" />
							<div>Food & Drinks</div>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}
