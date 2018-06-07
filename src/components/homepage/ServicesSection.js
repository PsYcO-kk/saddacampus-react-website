import React from 'react';
import Service from './Service';

const deliveryDescription = "Don't go out in the summer heat pretty. You will tan. Let us deliver right at your hostels or PG.";
const blogsDescription = "There are always some things you need to know and once in college you need all the help available.";
const dealsDescription = "Access a variety of student exclusive coupons and discounts from top online brands as well as their favourite cafes, pubs, entertainment outlets, education, hobbies and more.";

const ServicesSection = () => (
    <section className="services-area pb-120">
		<div className="container">
			<div className="row section-title">
				<h1>What Student-friendly services we offer?</h1>
				<p>BTW, we already apologize we cannot do anything about your sem-backs and low attendance, but - </p>
			</div>
			<div className="row">
				<Service serviceName="Food Delivery" serviceDescription={deliveryDescription} />
				<Service serviceName="Blogs & Informatics" serviceDescription={blogsDescription} />
				<Service serviceName="Deals & Offers" serviceDescription={dealsDescription} />
			</div>
		</div>
    </section>
);

export default ServicesSection;
