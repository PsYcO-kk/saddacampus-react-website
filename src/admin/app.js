import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './assets/styles/style.css';
import './assets/scripts/fontawesome-all.min.js';

import DefaultLayout from './components/containers/DefaultLayout';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Page404 from './components/Pages/Page404';
import Logout from './components/Logout';

import configureStore from './store/configureStore';

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/login" name="Login Page" component={Login} />
				<Route exact path="/register" name="Register Page" component={Register} />
				<Route exact path="/logout" name="Logout" component={Logout} />
				<Route path="/" name="Home" component={DefaultLayout} />
			</Switch>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));
