import React from 'react';
// import Loadable from 'react-loadable';

import DefaultLayout from './containers/DefaultLayout';
import Dashboard from './views/Dashboard';
import Administrators from './views/Administrators';
import CreateAdmin from './views/Forms/CreateAdmin';

// const Loading = () => (
// 	<h5>Loading...</h5>
// );

// const Widgets = Loadable({
// 	loader: () => import('./views/Widgets/Widgets'),
// 	loading: Loading,
// });


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
	{ path: '/', exact: true, name: 'Home', component: DefaultLayout },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
	{ path: '/administrators', exact: true, name: 'Administrators', component: Administrators },
	{ path: '/administrators/create', name: 'Create Admin', component: CreateAdmin },
];

export default routes;
