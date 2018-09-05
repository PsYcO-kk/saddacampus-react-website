import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class ServicesSection extends React.Component{
	constructor(){
		super();
		this.state = {
			id: 1,
			height: 450
		};
	}
	handleHover = (id) => {
		this.setState({ id });
	}
	render(){
		return(
			<section className="section-gap-half">
				<div style={{ padding: '0 10%', textAlign: 'center' }}>
					<div>
						<h1>What Student-friendly services we offer?</h1>
						<p style={{ fontSize: '22px', lineHeight: '25px' }}>BTW, we already apologize we cannot do anything about your sem-backs and low attendance, but - </p>
					</div>
					<Row className="remove-extra-space">
						<Col md={3} className="remove-extra-space">
							<div style={{ margin: '7%', padding: '3%', fontWeight: 'bold' }} className={"service-tab "+(this.state.id === 1 ? 'active-service-tab' : '')} onMouseOver={()=>{ this.handleHover(1) }}>
								<img src="./assets/images/application.png" className="img-fluid" />
								<div style={{ marginTop: '7%', fontSize: '20px' }}>Food Delivery</div>
							</div>
						</Col>
						<Col md={3} className="remove-extra-space">
							<div style={{ margin: '7%', padding: '3%', fontWeight: 'bold' }} className={"service-tab "+(this.state.id === 2 ? 'active-service-tab' : '')} onMouseOver={()=>{ this.handleHover(2) }}>
								<img src="./assets/images/application.png" className="img-fluid" />
								<div style={{ marginTop: '7%', fontSize: '20px' }}>Video Lectures</div>
							</div>
						</Col>
						<Col md={3} className="remove-extra-space">
							<div style={{ margin: '7%', padding: '3%', fontWeight: 'bold' }} className={"service-tab "+(this.state.id === 3 ? 'active-service-tab' : '')} onMouseOver={()=>{ this.handleHover(3) }}>
								<img src="./assets/images/application.png" className="img-fluid" />
								<div style={{ marginTop: '7%', fontSize: '20px' }}>Internships</div>
							</div>
						</Col>
						<Col md={3} className="remove-extra-space">
							<div style={{ margin: '7%', padding: '3%', fontWeight: 'bold' }} className={"service-tab "+(this.state.id === 4 ? 'active-service-tab' : '')} onMouseOver={()=>{ this.handleHover(4) }}>
								<img src="./assets/images/application.png" className="img-fluid" />
								<div style={{ marginTop: '7%', fontSize: '20px' }}>Deals & Offers</div>
							</div>
						</Col>
					</Row>
				</div>

				<TransitionGroup style={{ position: 'relative', height: this.state.height, overflowX: 'hidden' }}>
					{this.state.id==1 && <CSSTransition
						key={1}
						timeout={1300}
						classNames="slide"
					>
						<Row className="remove-extra-space align-items-center" style={{ position: 'absolute' }}>
							<Col md={5} className="remove-extra-space">
								<div className="thumb" style={{ textAlign: 'left', margin: '2% 0' }}>
									<img className="img-fluid" src="/assets/images/beauty-black-and-white-color-splash-46171.jpg" alt="" />
								</div>
							</Col>
							<Col md={7} className="remove-extra-space">
								<div style={{ margin: '3% 0 0 20%' }}>
									<div style={{ maxWidth: '350px' }}>
										<h1>Latest News from our Blog</h1>
										<p style={{ fontSize: '22px', lineHeight: '25px', margin: '7% 0' }}>There are always some things you need to know and once in college you need all the help available.</p>
										<Button outline color="primary" style={{ borderRadius: 0 }}>EXPLORE</Button>
									</div>
								</div>
							</Col>
						</Row>
					</CSSTransition>}
					{this.state.id==2 && <CSSTransition
						key={2}
						timeout={1300}
						classNames="slide"
					>
						<Row className="remove-extra-space align-items-center" style={{ position: 'absolute' }}>
							<Col md={5} className="remove-extra-space">
								<div className="thumb" style={{ textAlign: 'left', margin: '2% 0' }}>
									<img className="img-fluid" src="/assets/images/beauty-black-and-white-color-splash-46171.jpg" alt="" />
								</div>
							</Col>
							<Col md={7} className="remove-extra-space">
								<div style={{ margin: '3% 0 0 20%' }}>
									<div style={{ maxWidth: '350px' }}>
										<h1>Latest News from our Blog</h1>
										<p style={{ fontSize: '22px', lineHeight: '25px', margin: '7% 0' }}>There are always some things you need to know and once in college you need all the help available.</p>
										<Button outline color="primary" style={{ borderRadius: 0 }}>EXPLORE</Button>
									</div>
								</div>
							</Col>
						</Row>
					</CSSTransition>}
					{this.state.id==3 && <CSSTransition
						key={3}
						timeout={1300}
						classNames="slide"
					>
						<Row className="remove-extra-space align-items-center" style={{ position: 'absolute' }}>
							<Col md={5} className="remove-extra-space">
								<div className="thumb" style={{ textAlign: 'left', margin: '2% 0' }}>
									<img className="img-fluid" src="/assets/images/beauty-black-and-white-color-splash-46171.jpg" alt="" />
								</div>
							</Col>
							<Col md={7} className="remove-extra-space">
								<div style={{ margin: '3% 0 0 20%' }}>
									<div style={{ maxWidth: '350px' }}>
										<h1>Latest News from our Blog</h1>
										<p style={{ fontSize: '22px', lineHeight: '25px', margin: '7% 0' }}>There are always some things you need to know and once in college you need all the help available.</p>
										<Button outline color="primary" style={{ borderRadius: 0 }}>EXPLORE</Button>
									</div>
								</div>
							</Col>
						</Row>
					</CSSTransition>}
					{this.state.id==4 && <CSSTransition
						key={4}
						timeout={1300}
						classNames="slide"
					>
						<Row className="remove-extra-space align-items-center" style={{ position: 'absolute' }}>
							<Col md={5} className="remove-extra-space">
								<div className="thumb" style={{ textAlign: 'left', margin: '2% 0' }}>
									<img className="img-fluid" src="/assets/images/beauty-black-and-white-color-splash-46171.jpg" alt="" />
								</div>
							</Col>
							<Col md={7} className="remove-extra-space">
								<div style={{ margin: '3% 0 0 20%' }}>
									<div style={{ maxWidth: '350px' }}>
										<h1>Latest News from our Blog</h1>
										<p style={{ fontSize: '22px', lineHeight: '25px', margin: '7% 0' }}>There are always some things you need to know and once in college you need all the help available.</p>
										<Button outline color="primary" style={{ borderRadius: 0 }}>EXPLORE</Button>
									</div>
								</div>
							</Col>
						</Row>
					</CSSTransition>}
				</TransitionGroup>
			</section>
		);
	}
}
