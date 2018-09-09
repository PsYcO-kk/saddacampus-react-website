import React from 'react';
import { Row, Col, Input } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faDotCircle from '@fortawesome/fontawesome-free-regular/faDotCircle';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';

const CheckoutPage = () => (
	<div className="checkout-page" style={{ backgroundColor: '#eee', padding: '5%' }}>
		<Row className="remove-extra-space">
			<Col md={8} className="remove-extra-space">
				<div style={{ float: 'left', height: '100%', position: 'relative' }}>
					<div style={{ position: 'absolute', border: '3px dashed #000', left: '18px', height: '100%', width: 0 }}>
					</div>
					<div style={{ position: 'absolute', top: '0' }}><FontAwesomeIcon icon={faDotCircle} size="3x" /></div>
					<div style={{ position: 'absolute', top: '60%' }}><FontAwesomeIcon icon={faDotCircle} size="3x" /></div>
					<div style={{ position: 'absolute', top: '100%' }}><FontAwesomeIcon icon={faDotCircle} size="3x" /></div>
				</div>
				<div>
					<div style={{ position: 'relative', height: '100px', backgroundColor: '#fff', margin: '7%', boxShadow: '8px 8px 6px -8px #555' }}>
						<div style={{ position: 'absolute', top: '-20px', left: '5%', height: '40px', width: '150px', backgroundColor: '#000' }}></div>
					</div>
					<div style={{ position: 'relative', height: '300px', backgroundColor: '#fff', margin: '7%', boxShadow: '8px 8px 6px -8px #555' }}>
						<div style={{ position: 'absolute', top: '-20px', left: '5%', height: '40px', width: '150px', backgroundColor: '#000' }}></div>
					</div>
					<div style={{ position: 'relative', height: '200px', backgroundColor: '#fff', margin: '7%', boxShadow: '8px 8px 6px -8px #555' }}>
						<div style={{ position: 'absolute', top: '-20px', left: '5%', height: '40px', width: '150px', backgroundColor: '#000' }}></div>
					</div>
				</div>
			</Col>
			<Col md={4} className="remove-extra-space">
				<div style={{ backgroundColor: '#fff', padding: '5%', margin: '5%', boxShadow: '8px 8px 6px -8px #555' }}>
					<Row className="remove-extra-space">
						<Col md={3} className="remove-extra-space">
							<div className="thumb" style={{ margin: '3px' }}>
								<img src="assets/images/food2.jpg" className="img-fluid" />
							</div>
						</Col>
						<Col md={9} className="remove-extra-space">
							<div style={{ margin: '5px', paddingLeft: '5px' }}>
								<div>
									<h4>Chicken Blast</h4>
								</div>
								<div>The Chicken Shop</div>
							</div>
						</Col>
					</Row>
					<hr />
					<Row className="remove-extra-space" style={{ margin: '5% 0' }}>
						<Col md={1} className="remove-extra-space">
							<div className="thumb">
								<img src="assets/images/svg/chicken-leg.svg" className="img-fluid" />
							</div>
						</Col>
						<Col md={6} className="remove-extra-space">
							<div>Chicken Biryani</div>
						</Col>
						<Col md={3} className="remove-extra-space">
							<div style={{ textAlign: 'center', borderRadius: '15px', border: '1px solid #555', margin: '0 5px' }}>
								<FontAwesomeIcon icon={faMinus} /> &nbsp; 1 &nbsp; <FontAwesomeIcon icon={faPlus} />
							</div>
						</Col>
						<Col md={2} className="remove-extra-space">
							<div style={{ textAlign: 'right' }}>
								Rs. 240
							</div>
						</Col>
					</Row>
					<Row className="remove-extra-space" style={{ margin: '5% 0' }}>
						<Col md={1} className="remove-extra-space">
							<div className="thumb">
								<img src="assets/images/svg/chicken-leg.svg" className="img-fluid" />
							</div>
						</Col>
						<Col md={6} className="remove-extra-space">
							<div>Chicken Biryani</div>
						</Col>
						<Col md={3} className="remove-extra-space">
							<div style={{ textAlign: 'center', borderRadius: '15px', border: '1px solid #555', margin: '0 5px' }}>
								<FontAwesomeIcon icon={faMinus} /> &nbsp; 1 &nbsp; <FontAwesomeIcon icon={faPlus} />
							</div>
						</Col>
						<Col md={2} className="remove-extra-space">
							<div style={{ textAlign: 'right' }}>
								Rs. 240
							</div>
						</Col>
					</Row>
					<Row className="remove-extra-space" style={{ margin: '5% 0' }}>
						<Col md={1} className="remove-extra-space">
							<div className="thumb">
								<img src="assets/images/svg/chicken-leg.svg" className="img-fluid" />
							</div>
						</Col>
						<Col md={6} className="remove-extra-space">
							<div>Chicken Biryani</div>
						</Col>
						<Col md={3} className="remove-extra-space">
							<div style={{ textAlign: 'center', borderRadius: '15px', border: '1px solid #555', margin: '0 5px' }}>
								<FontAwesomeIcon icon={faMinus} /> &nbsp; 1 &nbsp; <FontAwesomeIcon icon={faPlus} />
							</div>
						</Col>
						<Col md={2} className="remove-extra-space">
							<div style={{ textAlign: 'right' }}>
								Rs. 240
							</div>
						</Col>
					</Row>
					<Input type="textarea" rows={2} placeholder="Any Special Instructions" style={{ borderRadius: 0, margin: '10% 0' }} />
					<div style={{ margin: '10% 0', position: 'relative' }}>
						<Input type="text" placeholder="Enter Coupon Code" style={{ borderRadius: 0, border:'none', borderBottom: '1px solid #555', paddingRight: '60px' }} />
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
					<Row className="remove-extra-space">
						<Col md={8} className="remove-extra-space">
							<div>Item Total</div>
						</Col>
						<Col md={4} className="remove-extra-space">
							<div>Rs. 1350</div>
						</Col>
					</Row>
					<Row className="remove-extra-space">
						<Col md={8} className="remove-extra-space">
							<div>Offer Discount</div>
						</Col>
						<Col md={4} className="remove-extra-space">
							<div>- Rs. 135</div>
						</Col>
					</Row>
					<Row className="remove-extra-space">
						<Col md={8} className="remove-extra-space">
							<div>GST</div>
						</Col>
						<Col md={4} className="remove-extra-space">
							<div>Rs. 13.5</div>
						</Col>
					</Row>
					<Row className="remove-extra-space">
						<Col md={8} className="remove-extra-space">
							<div>Delivery Charge</div>
						</Col>
						<Col md={4} className="remove-extra-space">
							<div>Rs. 20</div>
						</Col>
					</Row>
					<hr />
					<Row className="remove-extra-space">
						<Col md={8} className="remove-extra-space">
							<div>Item Total</div>
						</Col>
						<Col md={4} className="remove-extra-space">
							<div>Rs. 1248.5</div>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	</div>
);

export default CheckoutPage;
