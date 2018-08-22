import React from 'react';
import { Container, Col,  Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import DealCard from './DealCard';

export default class SingleCategoryDeals extends React.Component{
	render(){
		return(
			<Container className="single-category">
				<h3>Food & Drinks</h3>
				<Row className="remove-extra-space">
					<Col md={4} className="remove-extra-space">
						<DealCard />
					</Col>
					<Col md={4} className="remove-extra-space">
						<DealCard />
					</Col>
					<Col md={4} className="remove-extra-space">
						<DealCard />
					</Col>
					<Col md={4} className="remove-extra-space">
						<DealCard />
					</Col>
					<Col md={4} className="remove-extra-space">
						<DealCard />
					</Col>
					<Col md={4} className="remove-extra-space">
						<DealCard />
					</Col>
				</Row>
				<div style={{ textAlign: 'right', paddingTop: '2%', marginRight: '2%' }}>
					View More
				</div>
			</Container>
		);
	}
}
