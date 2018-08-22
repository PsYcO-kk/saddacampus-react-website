import React from 'react';
import { Row, Col } from 'reactstrap';

import Header from '../Header';
import CategoriesNavbar from './CategoriesNavbar';
import MainPage from './MainPage';

const DefaultStructure = () => (
	<div>
		<Header />
		<CategoriesNavbar />
		<MainPage />
	</div>
);

export default DefaultStructure;
