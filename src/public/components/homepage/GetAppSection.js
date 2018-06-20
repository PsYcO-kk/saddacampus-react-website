import React from 'react';

const descriptionStyle = {
	"fontWeight": "normal",
	"marginTop": "3%"
};

const linkDivStyle = {
	"marginTop": "2%"
};

const linkStyle = {
	"cursor": "pointer"
};

const imgStyle = {
	"maxWidth": "40%"
};

const GetAppSection = () => (
	<section className="section-gap-half">
		<div className="container jumbotron" style={{ borderRadius: '0' }}>
			<div className="row align-items-center">
				<div className="col-lg-4 about-left">
					<img className="img-fluid" src="/assets/images/application.png" alt="" />
				</div>
				<div className="col-lg-8 about-right">
					<h1>The Best Food Delivery App</h1>
					<h4 style={descriptionStyle}>
						Now you can make food happen pretty much wherever you are thanks to the free easy-to-use Food Delivery.
					</h4>
					<div style={linkDivStyle}>
						<a style={linkStyle} href="https://play.google.com/store/apps/details?id=com.saddacampus.app">
							<img className="img-fluid" src="/assets/images/google-play-badge.png" style={imgStyle} alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default GetAppSection;
