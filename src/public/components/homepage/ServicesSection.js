import React from 'react';
import Service from './Service';

const deliveryDescription = "Access a variety of student exclusive coupons and discounts from top online brands as well as their favourite cafes, pubs, entertainment outlets, education, hobbies and more.";
const lecturesDescription = "Access a variety of student exclusive coupons and discounts from top online brands as well as their favourite cafes, pubs, entertainment outlets, education, hobbies and more.";
const internshipsDescription = "Access a variety of student exclusive coupons and discounts from top online brands as well as their favourite cafes, pubs, entertainment outlets, education, hobbies and more.";
const dealsDescription = "Access a variety of student exclusive coupons and discounts from top online brands as well as their favourite cafes, pubs, entertainment outlets, education, hobbies and more.";

const ServicesSection = () => (
    <section className="services-area pb-120">
		<div className="container">
			<div className="row section-title">
				<h1>What Student-friendly services we offer?</h1>
				<p>BTW, we already apologize we cannot do anything about your sem-backs and low attendance, but - </p>
			</div>
			<div className="row" style={{ 'backgroundColor': 'white', 'padding': '3%' }}>
				<Service serviceName="Food Delivery" serviceDescription={deliveryDescription} link="/" />
				<Service serviceName="Video Lectures" serviceDescription={lecturesDescription} link="/" />
				<Service serviceName="Internships" serviceDescription={internshipsDescription} link="/" />
				<Service serviceName="Deals" serviceDescription={dealsDescription} link="/deals" />
			</div>
		</div>
    </section>
);

export default ServicesSection;
