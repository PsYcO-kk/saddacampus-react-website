import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomePage from './components/HomePage';
// import AboutUsPage from './components/AboutUsPage';
// import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import NotFoundPage from './components/NotFoundPage';

// import './styles/bootstrap.min.css';
// import './styles/poppins.css';
// import './styles/index.css';
// import './styles/main.css';

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
import './styles/admin/style.css';

import DefaultLayout from './components/admin/containers/DefaultLayout/DefaultLayout';
import Login from './components/admin/views/Pages/Login';
import Register from './components/admin/views/Pages/Register';
// import Page404 from './components/admin/views/Pages/Page404';

const jsx = (
	<BrowserRouter>
		<Switch>
			<Route exact path="/login" name="Login Page" component={Login} />
			<Route exact path="/register" name="Register Page" component={Register} />
			<Route path="/" name="Home" component={DefaultLayout} />
			{/*<Route name="Page 404" component={Page404} />*/}
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(jsx , document.getElementById('app'));
