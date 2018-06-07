import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import NotFoundPage from './components/NotFoundPage';


import './styles/bootstrap.min.css';
import './styles/poppins.css';
import './styles/index.css';
import './styles/main.css';

// postData('http://127.0.0.1:3000/v1/membership/auth', { country_code: '+91', number: '7909024332', otp: '187209' })
//   .then((data) => {
// 	  console.log(data);
// 	})
//   .catch((error) => {
// 	  console.log(error);
// 	})

// function postData(url, data) {
//   return fetch(url, {
//     body: JSON.stringify(data),
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json'
// 	}
// 	})
//   .then((response) => response.json())
// }

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
			<Footer />
        </div>
	</BrowserRouter>
);

ReactDOM.render(jsx, document.getElementById('app'));
