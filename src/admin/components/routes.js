import React from 'react';
// import Loadable from 'react-loadable';

import DefaultLayout from './containers/DefaultLayout';
import Dashboard from './Dashboard';
import Administrators from './Administrators';
import CreateAdmin from './Forms/CreateAdmin';

// const Loading = () => (
// 	<h5>Loading...</h5>
// );

// const Dashboard = Loadable({
// 	loader: () => ,
// 	loading: Loading,
// });

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
export const superRoutes = [
	{ path: '/', exact: true, name: 'Home', component: DefaultLayout },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
	{ path: '/administrators', exact: true, name: 'Administrators', component: Administrators },
	{ path: '/administrators/create', name: 'Create Admin', component: CreateAdmin },
];

export const maintainerRoutes = [
	{ path: '/', exact: true, name: 'Home', component: DefaultLayout },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
];
