import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Header from './public/components/Header';
// import Footer from './public/components/Footer';
// import HomePage from './public/components/HomePage';
// import AboutUsPage from './public/components/AboutUsPage';
// import PrivacyPolicyPage from './public/components/PrivacyPolicyPage';
// import NotFoundPage from './public/components/NotFoundPage';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './public/styles/poppins.css';
// import './public/styles/index.css';
// import './public/styles/main.css';

// const jsx = (
// 	<BrowserRouter>
// 		<div>
// 			<Header />
//             <Switch>
//                 <Route path="/" component={HomePage} exact={true} />
//                 <Route path="/about-us" component={AboutUsPage} />
//                 <Route path="/privacy-policy" component={PrivacyPolicyPage} />
//                 <Route component={NotFoundPage} />
// 			</Switch>
// 			<Footer />
//         </div>
// 	</BrowserRouter>
// );

// ReactDOM.render(jsx, document.getElementById('app'));

import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './admin/styles/style.css';

import DefaultLayout from './admin/containers/DefaultLayout';
import Login from './admin/views/Pages/Login';
import Register from './admin/views/Pages/Register';
import Page404 from './admin/views/Pages/Page404';

const jsx = (
	<BrowserRouter>
		<Switch>
			<Route exact path="/login" name="Login Page" component={Login} />
			<Route exact path="/register" name="Register Page" component={Register} />
			<Route path="/" name="Home" component={DefaultLayout} />
			<Route name="Page 404" component={Page404} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(jsx , document.getElementById('app'));
