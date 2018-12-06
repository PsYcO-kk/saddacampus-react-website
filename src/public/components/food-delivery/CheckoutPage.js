import React from 'react';
import { Row, Col, Input } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt';
import faWallet from '@fortawesome/fontawesome-free-solid/faWallet';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';

class CheckoutPage extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="checkout-page">
				<Row className="remove-extra-space">

					<Col md={8} className="remove-extra-space">
						<div>
							<div className="single-checkout-step">
								<div className="step-heading">
									<FontAwesomeIcon icon={faUser} style={{ marginRight: '10px', fontSize: '20px' }} /> User Details
								</div>
								<div className="step-line"></div>
								<span>Ankit Kashyap</span>
								<span>+91-7292829003</span>
							</div>
							<div className="single-checkout-step">
								<div className="step-heading">
									<FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px', fontSize: '20px' }} /> Address Details
								</div>
								<div className="step-line"></div>
								<Row className="remove-extra-space">
									<Col md={6} className="remove-extra-space">
										<div className="single-address-block">
										</div>
									</Col>
									<Col md={6} className="remove-extra-space">
										<div className="single-address-block">
										</div>
									</Col>
								</Row>
							</div>
							<div className="single-checkout-step">
								<div className="step-heading">
									<FontAwesomeIcon icon={faWallet} style={{ marginRight: '10px', fontSize: '20px' }} /> Payment Options
								</div>
								<div className="single-payment-option"></div>
								<div className="single-payment-option"></div>
							</div>
						</div>
					</Col>

					<Col md={4} className="remove-extra-space">
						<div className="checkout-cart">
							<Row className="remove-extra-space">
								<Col md={4} className="remove-extra-space">
									<div className="res-thumb">
										<img src="/assets/images/food2.jpg" className="img-fluid" />
									</div>
								</Col>
								<Col md={8} className="remove-extra-space">
									<div style={{ margin: '5px', paddingLeft: '5px' }}>
										<div>
											<h4>Chicken Blast</h4>
										</div>
										<div>The Chicken Shop</div>
									</div>
								</Col>
							</Row>
							<hr />
							<div className="cart-item non-veg">
								<div className="food-type-thumb">
									<img src="/assets/images/svg/chicken-leg.svg" className="img-fluid" />
								</div>
								<div>Chicken Biryani</div>
								<div style={{ textAlign: 'center', borderRadius: '15px', border: '1px solid #555', margin: '0 5px' }}>
									<FontAwesomeIcon icon={faMinus} /> &nbsp; 1 &nbsp; <FontAwesomeIcon icon={faPlus} />
								</div>
								<div style={{ textAlign: 'right' }}>
									Rs. 240
								</div>
							</div>
							<Input type="textarea" rows={2} placeholder="Any Special Instructions" style={{ borderRadius: 0, margin: '10% 0' }} />
							<div style={{ margin: '10% 0', position: 'relative' }}>
								<Input type="text" placeholder="Enter Coupon Code" style={{ borderRadius: 0, border:'none', borderBottom: '1px solid #555', boxShadow: 'none', paddingRight: '60px' }} />
								<div style={{ position: 'absolute', top: '9px', right: '5px' }}>
									<a>Apply</a>
								</div>
							</div>
							<Input type="select" style={{ margin: '10% 0', borderRadius: 0 }}>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</Input>
							<hr />
							<div className="price-counts">
								<div>Item Total</div>
								<div>Rs. 1350</div>
							</div>
							<div className="price-counts discount-price">
								<div>Offer Discount</div>
								<div>- Rs. 135</div>
							</div>
							<div className="price-counts">
								<div>GST</div>
								<div>Rs. 13.5</div>
							</div>
							<div className="price-counts">
								<div>Delivery Charge</div>
								<div>Rs. 20</div>
							</div>
							<hr />
							<div className="price-counts">
								<div>Item Total</div>
								<div>Rs. 1248.5</div>
							</div>
						</div>
					</Col>

				</Row>
			</div>
		);
	}
}

export default CheckoutPage;
