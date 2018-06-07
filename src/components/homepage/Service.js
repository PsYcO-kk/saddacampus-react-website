import React from 'react';

const Service = (props) => (
	<div className="col-lg-4 single-service">
		<span className="lnr lnr-car"></span>
		<a href="#"><h4>{props.serviceName}</h4></a>
		<p>{props.serviceDescription}</p>
	</div>
);

export default Service;
