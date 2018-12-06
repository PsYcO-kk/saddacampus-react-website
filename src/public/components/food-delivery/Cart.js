import React from 'react';
import { Row, Col, Button, Input } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight';

export default class Cart extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	render(){
		return(
			<div style={{ backgroundColor: '#eee', height: '100%' }}>
				<div className="cart">
					<h1>CART</h1>
					<hr />
					<Row className="remove-extra-space" style={{ margin: '5% 0' }}>
						<Col md={6} className="remove-extra-space">
							<div>Chicken Biryani</div>
						</Col>
						<Col md={4} className="remove-extra-space">
							<div style={{ textAlign: 'center' }}>
								<FontAwesomeIcon icon={faMinus} style={{ color: '#ff0000' }} /> &nbsp; 1 &nbsp; <FontAwesomeIcon icon={faPlus} style={{ color: '#00ff00' }} />
							</div>
						</Col>
						<Col md={2} className="remove-extra-space">
							<div style={{ textAlign: 'right' }}>
								Rs. 240
							</div>
						</Col>
					</Row>
					<Row className="remove-extra-space" style={{ margin: '5% 0' }}>
						<Col md={6} className="remove-extra-space">
							<div>Chicken Biryani</div>
						</Col>
						<Col md={4} className="remove-extra-space">
							<div style={{ textAlign: 'center' }}>
								<FontAwesomeIcon icon={faMinus} style={{ color: '#ff0000' }} /> &nbsp; 1 &nbsp; <FontAwesomeIcon icon={faPlus} style={{ color: '#00ff00' }} />
							</div>
						</Col>
						<Col md={2} className="remove-extra-space">
							<div style={{ textAlign: 'right' }}>
								Rs. 240
							</div>
						</Col>
					</Row>
					<Row className="remove-extra-space" style={{ margin: '5% 0' }}>
						<Col md={6} className="remove-extra-space">
							<div>Chicken Biryani</div>
						</Col>
						<Col md={4} className="remove-extra-space">
							<div style={{ textAlign: 'center' }}>
								<FontAwesomeIcon icon={faMinus} style={{ color: '#ff0000' }} /> &nbsp; 1 &nbsp; <FontAwesomeIcon icon={faPlus} style={{ color: '#00ff00' }} />
							</div>
						</Col>
						<Col md={2} className="remove-extra-space">
							<div style={{ textAlign: 'right' }}>
								Rs. 240
							</div>
						</Col>
					</Row>
					<hr />
					<Row className="remove-extra-space" style={{ margin: '5% 0', fontWeight: 'bold' }}>
						<Col md={6} className="remove-extra-space">
							<div>Total:</div>
						</Col>
						<Col md={6} className="remove-extra-space">
							<div style={{ textAlign: 'right' }}>
								Rs. 240
							</div>
						</Col>
					</Row>
					<Input type="textarea" rows={2} placeholder="Any Special Instructions" style={{ borderRadius: 0, margin: '10% 0' }} />
					<div style={{ marginTop: '20%', textAlign: 'center' }}>
						<Button outline color="primary" style={{ borderRadius: 0 }}>Proceed to Checkout <FontAwesomeIcon icon={faAngleDoubleRight} /></Button>
					</div>
				</div>
			</div>
		);
	}
}
