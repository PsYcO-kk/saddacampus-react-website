import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomePage from './components/HomePage';
// import AboutUsPage from './components/AboutUsPage';
// import PrivacyPolicyPage from './components/PrivacyPolicyPage';
// import NotFoundPage from './components/NotFoundPage';

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

import '@coreui/coreui/dist/js/coreui-utilities.min.js';
// import '@coreui/coreui/dist/js/coreui.min.js';
import '@coreui/coreui/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui-standalone.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
// import 'flag-icon-css/css/flag-icon.min.css';
import './scripts/fontawesome-all.js';
// import 'simple-line-icons/css/simple-line-icons.css';

import LoginPage from './components/admin/LoginPage';

ReactDOM.render(<LoginPage />, document.getElementById('app'));
