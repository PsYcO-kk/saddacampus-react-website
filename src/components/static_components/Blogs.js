import React, { Fragment } from 'react';

const Blog  = () => (
  <Fragment>
      <section className="latest-blog-area section-gap">
		<div className="container">
			<div className="row section-title">
				<h1>Latest News from our Blog</h1>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
			<div className="row">
				<div className="col-lg-6">
					<div className="single-latest-blog">
						<div className="thumb">
							<img className="img-fluid" src="./assets/images/coffee.PNG" alt="" />
						</div>
						<ul className="tags">
							<li><a href="#">Food</a></li>
							<li><a href="#">One.0</a></li>
						</ul>
						<a href="#">
							<h4>Lorem ipsum dolor sit amet</h4>
						</a>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
						</p>
						<p className="date">31st January, 2018</p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="single-latest-blog">
						<div className="thumb">
							<img className="img-fluid" src="./assets/images/burger.PNG" alt=""/>
						</div>
						<ul className="tags">
							<li><a href="#">Food</a></li>
							<li><a href="#">One.0</a></li>
						</ul>
						<a href="#">
							<h4>Lorem ipsum dolor sit amet</h4>
						</a>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
						</p>
						<p className="date">31st January, 2018</p>
					</div>
				</div>
			</div>
		</div>
	</section>
  </Fragment>

)

export default Blog;