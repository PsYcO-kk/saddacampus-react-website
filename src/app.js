import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import NotFoundPage from './components/NotFoundPage';

import './styles/bootstrap.min.css';
import './styles/poppins.css';
import './styles/main.css';
import './styles/fontawesome.min.css';
import './styles/index.css';

const jsx = (
	<BrowserRouter>
		<div>
			<Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/privacy-policy" component={PrivacyPolicyPage} />
                <Route component={NotFoundPage} />
            </Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(jsx, document.getElementById('app'));
