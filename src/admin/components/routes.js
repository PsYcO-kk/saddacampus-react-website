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
	{ path: '/admin', exact: true, name: 'Home', component: DefaultLayout },
	{ path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
	{ path: '/admin/administrators', exact: true, name: 'Administrators', component: Administrators },
	{ path: '/admin/administrators/create', name: 'Create Admin', component: CreateAdmin },
	{ path: '/admin/merchants', exact: true, name: 'Merchants', component: Merchants },
	{ path: '/admin/merchants/create', name: 'Create Merchant', component: CreateMerchant },
	{ path: '/admin/businesses', exact: true, name: 'Businesses', component: Businesses },
	{ path: '/admin/businesses/restaurants', name: 'Restaurants', component: Restaurants },
	{ path: '/admin/create-menu', name: 'Create Menu', component: CreateMenu },
	{ path: '/admin/edit-menu', name: 'Edit Menu', component: EditMenu },
];

export const maintainerRoutes = [
	{ path: '/admin', exact: true, name: 'Home', component: DefaultLayout },
	{ path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
];
