import React from 'react';
// import Loadable from 'react-loadable';

import DefaultLayout from './containers/DefaultLayout';
import Dashboard from './Dashboard';
import Administrators from './Administrators';
import CreateAdmin from './Forms/CreateAdmin';
import Merchants from './Merchants';
import CreateMerchant from './Forms/CreateMerchant';
import Businesses from './Businesses/Businesses';
import Restaurants from './Businesses/Restaurants';
import CreateMenu from './Forms/CreateMenu';
import EditMenu from './Forms/EditMenu';

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
	{ path: '/merchants', exact: true, name: 'Merchants', component: Merchants },
	{ path: '/merchants/create', name: 'Create Merchant', component: CreateMerchant },
	{ path: '/businesses', exact: true, name: 'Businesses', component: Businesses },
	{ path: '/businesses/restaurants', name: 'Restaurants', component: Restaurants },
	{ path: '/create-menu', name: 'Create Menu', component: CreateMenu },
	{ path: '/edit-menu', name: 'Edit Menu', component: EditMenu },
];

export const maintainerRoutes = [
	{ path: '/', exact: true, name: 'Home', component: DefaultLayout },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
];
