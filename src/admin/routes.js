import React from 'react';
import Loadable from 'react-loadable';

import DefaultLayout from './containers/DefaultLayout';
import CreateAdmin from './views/Forms/CreateAdmin';
import Page404 from './views/Pages/Page404';

const Loading = () => (
	<h5>Loading...</h5>
);

const Dashboard = Loadable({
	loader: () => import('./views/Dashboard'),
	loading: Loading,
});
const Administrators = Loadable({
	loader: () => import('./views/Administrators'),
	loading: Loading,
});
// const CreateAdmin = Loadable({
// 	loader: () => import('./views/Forms/CreateAdmin'),
// 	loading: Loading,
// });


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
export const superRoutes = [
	{ path: '/', exact: true, name: 'Home', component: DefaultLayout },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
	{ path: '/administrators', exact: true, name: 'Administrators', component: Administrators },
	{ path: '/administrators/create', name: 'Create Admin', component: CreateAdmin },
	// { name: 'Not Found', component: Page404 },
];

export const maintainerRoutes = [
	{ path: '/', exact: true, name: 'Home', component: DefaultLayout },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
	// { name: 'Not Found', component: Page404 },
];
