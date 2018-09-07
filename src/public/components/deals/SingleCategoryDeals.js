import React from 'react';
import { Container, Col,  Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import DealCard from './DealCard';

const SingleCategoryDeals = (props) => (
	<Container className="single-category">
		<h3>Food & Drinks</h3>
		<Row className="remove-extra-space">
			<DealCard handleRequestOpenModal={props.handleRequestOpenModal} />
			<DealCard handleRequestOpenModal={props.handleRequestOpenModal} />
			<DealCard handleRequestOpenModal={props.handleRequestOpenModal} />
			<DealCard handleRequestOpenModal={props.handleRequestOpenModal} />
			<DealCard handleRequestOpenModal={props.handleRequestOpenModal} />
			<DealCard handleRequestOpenModal={props.handleRequestOpenModal} />
		</Row>
		<div style={{ textAlign: 'right', paddingTop: '2%', marginRight: '2%' }}>
			View More
		</div>
	</Container>
);

export default SingleCategoryDeals;
