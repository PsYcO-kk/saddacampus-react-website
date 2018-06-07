import React, { Fragment } from 'react';

const VideoSection = () => (
  <Fragment> 
   <section className="home-about-area section-gap">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-6 about-left">
					<video className="embed-responsive embed-responsive-16by9" preload="metadata" controls poster="./assets/images/one-o-16-9.jpeg">
						<source src="assets/videos/one-o.mp4" type="video/mp4"/>
						  Your browser does not support the video tag.
					</video>
				</div>
				<div className="col-lg-6 about-right">
					<h1>Our first strive to fulfill your HUNGER FOR HAPPINESS</h1>
					<h4>Launching Saddacampus One.0</h4>
					<p>
						In the month of March, the evening scenery of the IIT (ISM) Main Gate changed owing to the presence of Saddacampus One.0 providing eat in, take away and hostel delivery at the best prices ever.
					</p>
					<a className="text-uppercase primary-btn" href="#">Get Details</a>
				</div>
			</div>
		</div>
    </section>>
  </Fragment>  
);
export default VideoSection;