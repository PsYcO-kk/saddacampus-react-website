import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faRupeeSign from '@fortawesome/fontawesome-free-solid/faRupeeSign';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';

export default class FoodItemCard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			quantity: 0
		};
	}

	handlePlus = () => {
		this.setState({
			quantity: this.state.quantity+1
		});
	}

	handleMinus = () => {
		if(this.state.quantity > 0)
			this.setState({
				quantity: this.state.quantity-1
			});
	}

	render(){
		return(
			<div className="food-item-card">
				<Row className="remove-extra-space">
					<Col md={2} className="remove-extra-space">
						<img src="./assets/images/svg/chicken-leg.svg" className="img-fluid chicken-leg" width="40px" />
					</Col>
					<Col md={6} className="remove-extra-space">
						<div className="body">
							<h4>Chicken Hyderabadi Biryani</h4>
							<Row className="remove-extra-space" style={{ fontWeight: 'bold' }}>
								Rs. 240 &nbsp;&nbsp; . &nbsp;&nbsp; <FontAwesomeIcon icon={faStar} style={{ color: '#f9d700' }} />&nbsp;4.5
							</Row>
							<Row className="remove-extra-space">
								Chawal with chicken pieces and masala
							</Row>
						</div>
					</Col>
					<Col md={4} className="remove-extra-space">
						<div className="add-to-cart-btn" style={this.state.quantity > 0 ? { width: '100px', padding: '9px' } : { width: '40px', padding: '12px' }}>
							{
								this.state.quantity > 0 ?
								(
									<Row className="remove-extra-space">
										<Col className="remove-extra-space" style={{ textAlign: 'left' }}>
											<FontAwesomeIcon icon={faMinus} style={{ color: '#ff0000' }} onClick={this.handleMinus} />
										</Col>
										<Col className="remove-extra-space" style={{ textAlign: 'center' }}>
											{this.state.quantity}
										</Col>
										<Col className="remove-extra-space" style={{ textAlign: 'right' }}>
											<FontAwesomeIcon icon={faPlus} style={{ color: '#00ff00' }} onClick={this.handlePlus} />
										</Col>
									</Row>
								) : (
									<Row className="remove-extra-space">
										<FontAwesomeIcon icon={faPlus} style={{ color: '#00ff00' }} onClick={this.handlePlus} />
									</Row>
								)
							}
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}
