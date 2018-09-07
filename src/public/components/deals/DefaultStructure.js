import React from 'react';
import { Parallax, Background } from 'react-parallax';

import Header from '../Header';
import CategoriesNavbar from '../CategoriesNavbar';
import DealsCarousel from './DealsCarousel';
import DealModal from './DealModal';
import SingleCategoryDeals from './SingleCategoryDeals';

export default class DefaultStructure extends React.Component {
	constructor(){
		super();
		this.state = {
			isModalOpen: false
		}
	}
	handleRequestOpenModal = () => {
		this.setState({ isModalOpen: true })
	}
	handleRequestCloseModal = () => {
		this.setState({ isModalOpen: false })
	}
	render(){
		return(
			<div>
				<Header />
				<CategoriesNavbar />
				<DealsCarousel />
				<Parallax
					bgImage={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg'}
					bgImageAlt="background"
					bgStyle={{ filter: 'brightness(50%)' }}
					className="deals-greeting"
					strength={400}
				>
					<div>
						<h1>Deals from all around</h1>
						<h4>There are always some things you need to know and</h4>
						<h4>once in college you need all the help available.</h4>
					</div>
				</Parallax>
				<SingleCategoryDeals handleRequestOpenModal={this.handleRequestOpenModal} />
				<SingleCategoryDeals handleRequestOpenModal={this.handleRequestOpenModal} />
				<SingleCategoryDeals handleRequestOpenModal={this.handleRequestOpenModal} />
				<DealModal isModalOpen={this.state.isModalOpen} handleRequestCloseModal={this.handleRequestCloseModal} />
			</div>
		);
	}
}
