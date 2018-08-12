import React from 'react';
import { Row, Col, Input } from 'reactstrap';
import Switch from "react-switch";

import ItemCard from './ItemCard';
import FoodItemCard from './FoodItemCard';
import Cart from './Cart';

export default class FoodItemsList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			filterStatus: false,
			switchStatus: false
		};
	}

	toggleSwitch = (switchStatus) => {
		this.setState({ switchStatus });
	}

	toggleFilter = () => {
		this.setState({ filterStatus: !this.state.filterStatus });
	}

	render(){
		return(
			<Row className="remove-extra-space" style={{ padding: '1%', paddingLeft: '5%' }}>
				<Col md={9} className="remove-extra-space">
					<div className="list-heading" style={{ marginBottom: '3%' }}>Chickblast Restaurant</div>
					<Row className="remove-extra-space">
						<Col md={2} className="remove-extra-space" style={{ borderRight: '2px solid #777' }}>
							<div className="food-categories">
								<div className="single-food-category">Chicken Biryani</div>
								<div className="single-food-category">Anda Biryani</div>
								<div className="single-food-category">Kulfi Biryani</div>
								<div className="single-food-category">Rice and Bread</div>
								<div className="single-food-category">Daru and Beer</div>
								<div className="single-food-category">maal Namkeen</div>
							</div>
						</Col>
						<Col md={10} className="remove-extra-space">
							<div className="items-container">
								<div htmlFor="material-switch" style={{ textAlign: 'right' }}>
									<span className="food-type-filter">
										<Input type="checkbox" checked={this.state.filterStatus} onChange={this.toggleFilter} /> Filter
									</span>
									<span className={this.state.filterStatus ? "" : "disable-filter"}>
										<span>
											<img src="./assets/images/svg/broccoli.svg" className="img-fluid" width="20px" />
										</span>
										&nbsp;
										<Switch
											checked={this.state.switchStatus}
											onChange={this.toggleSwitch}
											onColor={this.state.filterStatus ? "#cc0000" : "#ccc"}
											onHandleColor="#ffffff"
											offColor={this.state.filterStatus ? "#00cc00" : "#ccc"}
											offHandleColor="#ffffff"
											handleDiameter={20}
											uncheckedIcon={false}
											checkedIcon={false}
											disabled={!this.state.filterStatus}
											boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
											activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
											height={15}
											width={35}
											className="react-switch"
											id="material-switch"
										/>
										&nbsp;
										<span>
											<img src="./assets/images/svg/chicken-leg.svg" className="img-fluid chicken-leg" width="20px" />
										</span>
									</span>
								</div>
								<div className="list-heading" style={{ fontSize: '24px' }}>Recommended</div>
								<Row className="items-list remove-extra-space">
									<ItemCard cardWidth={6} imgSrc="./assets/images/chips-dinner-fast-food-70497.jpg" />
									<ItemCard cardWidth={6} imgSrc="./assets/images/pexels-photo-566566.jpeg" />
								</Row>
								<div className="list-heading" style={{ fontSize: '24px', marginTop: '5%' }}>Chicken Biryani</div>
								<div>
									<FoodItemCard />
									<FoodItemCard />
									<FoodItemCard />
									<FoodItemCard />
								</div>
							</div>
						</Col>
					</Row>
				</Col>
				<Col md={3} className="remove-extra-space">
					<Cart />
				</Col>
			</Row>
		);
	}
}
