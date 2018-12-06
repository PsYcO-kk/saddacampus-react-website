import React from 'react';
import { Row, Col } from 'reactstrap';

import ItemCard from './ItemCard';

export default class RestaurantsList extends React.Component{
	render(){
		return(
			<div className="items-container">
				<div className="list-heading" style={{ fontFamily: 'Roboto, Light' }}>Restaurants</div>
				<Row className="items-list remove-extra-space">
					<ItemCard cardWidth={4} imgSrc="./assets/images/chips-dinner-fast-food-70497.jpg" />
					<ItemCard cardWidth={4} imgSrc="./assets/images/pexels-photo-566566.jpeg" />
					<ItemCard cardWidth={4} imgSrc="./assets/images/pexels-photo-675951.jpeg" />
					<ItemCard cardWidth={4} imgSrc="./assets/images/pexels-photo-691114.jpeg" />
					<ItemCard cardWidth={4} imgSrc="./assets/images/pexels-photo-699544.jpeg" />
					<ItemCard cardWidth={4} imgSrc="./assets/images/pexels-photo-64208.jpeg" />
				</Row>
			</div>
		);
	}
}
