import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import ReactModal from 'react-modal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEye from '@fortawesome/fontawesome-free-regular/faEye';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

const modalStyles = {
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		// marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)',
		width				  : '70%'
	},
	overlay : {
		zIndex				  : 100
	}
};

ReactModal.setAppElement('#app');

const DealModal = (props) => (
	<ReactModal
		isOpen={props.isModalOpen}
		onRequestClose={props.handleRequestCloseModal}
		style={modalStyles}
		ariaHideApp={true}
		shouldFocusAfterRender={true}
		shouldCloseOnOverlayClick={true}
		shouldCloseOnEsc={true}
		shouldReturnFocusAfterClose={true}
		role="dialog"
	>
		<div>
			<span style={{ float: 'right' }} onClick={props.handleRequestCloseModal}><FontAwesomeIcon icon={faTimes} /></span>
			<Row className="remove-extra-space">
				<Col md={6} className="remove-extra-space">
					<div style={{ margin: '10px' }}>
						<div className="thumb" style={{ textAlign: "center" }}>
							<img src="assets/images/beauty-black-and-white-color-splash-46171.jpg" className="img-fluid" style={{ width: '380px', boxShadow: '8px 8px 6px -8px #ccc' }} />
						</div>
						<div className="body" style={{ padding: '0 7%', paddingBottom: 0 }}>
							<h3 style={{ margin: '20px 0 5px 0' }}>BOX 8</h3>
							<p>Buy ONE Get one FREE on all takeaways and dine in orders across India.</p>
							<div>
								<span style={{ margin: '0 3%' }}><FontAwesomeIcon icon={faEye} /> 1.364 views</span>
								<span style={{ margin: '0 3%' }}>Valid till 12-12-2018</span>
							</div>
						</div>
					</div>
				</Col>
				<Col md={6} className="remove-extra-space">
					<div style={{ margin: '10px' }}>
						<h3>Get Offer &nbsp;&nbsp;&nbsp; <Button color="primary" style={{ borderRadius: 0, padding: '1px 3px' }}>Redeem</Button></h3>
						<hr />
						<div style={{ height: '330px', overflowY: 'scroll' }}>
							<h4 style={{ marginBottom: '5px' }}>Deal Summary</h4>
							<div>
								<h5>Brand</h5>
								<p>Paytm</p>
							</div>
							<div>
								<h5>Product Code</h5>
								<p>VBHESJ7-EUGFUY327-JGBEW7</p>
							</div>
							<div>
								<h5>Deal Type</h5>
								<p>Online</p>
							</div>
							<div>
								<h5>City</h5>
								<p>Across India</p>
							</div>

							<h4 style={{ marginBottom: '5px' }}>Terms & Conditions</h4>
							<div>
								<h5>In Detail</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas libero. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nulla est. Sed ac dolor sit amet purus malesuada congue. Proin mattis lacinia justo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nunc dapibus tortor vel mi dapibus sollicitudin. Nullam at arcu a est sollicitudin euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Cras elementum. Nulla non arcu lacinia neque faucibus fringilla. Nullam faucibus mi quis velit. Etiam commodo dui eget wisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut tempus purus at lorem. Nullam eget nisl. Nullam faucibus mi quis velit. Praesent in mauris eu tortor porttitor accumsan.
								</p>
							</div>
							<div>
								<h5>How To Redeem</h5>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas libero.</p>
							</div>
							<div>
								<h5>Return Policy</h5>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas libero.</p>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	</ReactModal>
);

export default DealModal;
