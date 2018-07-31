import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/homepage/DefaultStructure';
import BlogsPage from './components/blogs/DefaultStructure';
import DealsPage from './components/deals/DefaultStructure';
import AboutUsPage from './components/AboutUsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TestComponent from './components/TestComponent';
import NotFoundPage from './components/NotFoundPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/main.css';

const jsx = (
	<BrowserRouter>
		<div>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/blogs" component={BlogsPage} />
                <Route path="/deals" component={DealsPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/privacy-policy" component={PrivacyPolicyPage} />
                <Route path="/test" component={TestComponent} />
                <Route component={NotFoundPage} />
			</Switch>
        </div>
	</BrowserRouter>
);

ReactDOM.render(jsx, document.getElementById('app'));
