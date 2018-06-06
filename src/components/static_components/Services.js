import React, { Fragment } from 'react';

const Services = () =>(
<Fragment>
    <section className="services-area pb-120">
    <div className="container">
        <div className="row section-title">
            <h1>What Student-friendly services we offer?</h1>
            <p>BTW, we already apologize we cannot do anything about your sem-backs and low attendance, but - </p>
        </div>
        <div className="row">
            <div className="col-lg-4 single-service">
                <span className="lnr lnr-car"></span>
                <a href="#"><h4>Food Delivery</h4></a>
                <p>
                    Don't go out in the summer heat pretty. You will tan. Let us deliver right at your hostels or PG.
                </p>
            </div>
            <div className="col-lg-4 single-service">
                <span className="lnr lnr-briefcase"></span>
                <a href="#"><h4>Blogs & Informatics</h4></a>
                <p>
                    There are always some things you need to know and once in college you need all the help available.
                </p>
            </div>
            <div className="col-lg-4 single-service">
                <span className="lnr lnr-bus"></span>
                <a href="#"><h4>Deals & Offers</h4></a>
                <p>
                    Access a variety of student exclusive coupons and discounts from top online brands as well as their favourite cafes, pubs, entertainment outlets, education, hobbies and more.
                </p>
            </div>
        </div>
    </div>
    </section>
</Fragment>
)

export default Services;