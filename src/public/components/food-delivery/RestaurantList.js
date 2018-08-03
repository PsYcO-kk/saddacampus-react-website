import React from 'react';
import { Row, Col } from 'reactstrap';

import ItemCard from './ItemCard';

export default class RestaurantList extends React.Component{
	render(){
		return(
			<div className="food-items-container">
				<div className="list-heading">Restaurants</div>
				<Row className="items-list remove-extra-space">
					<ItemCard imgSrc="./assets/images/chips-dinner-fast-food-70497.jpg" />
					<ItemCard imgSrc="./assets/images/pexels-photo-566566.jpeg" />
					<ItemCard imgSrc="./assets/images/pexels-photo-675951.jpeg" />
					<ItemCard imgSrc="./assets/images/pexels-photo-691114.jpeg" />
					<ItemCard imgSrc="./assets/images/pexels-photo-699544.jpeg" />
					<ItemCard imgSrc="./assets/images/pexels-photo-64208.jpeg" />
				</Row>
			</div>
		);
	}
}
