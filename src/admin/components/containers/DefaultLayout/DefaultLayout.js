import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import { superNav, maintainerNav } from '../../_nav';
// routes config
import { superRoutes, maintainerRoutes } from '../../routes';
// import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';

class DefaultLayout extends Component {
	componentDidMount(){
		if(!sessionStorage.getItem('admin-token')){
			this.props.history.push("/login");
		}
	}

	controlledSidebarNav = () => {
		if(this.props.role == 'super' || this.props.role == 'core')
			return <AppSidebarNav navConfig={superNav} {...this.props} />;
		else
			return <AppSidebarNav navConfig={maintainerNav} {...this.props} />;
	}

	controlledRoutes = (this.props.role == 'super' || this.props.role == 'core') ? superRoutes : maintainerRoutes

	render() {
		return (
		<div className="app">
			<AppHeader fixed>
				<DefaultHeader />
			</AppHeader>
			<div className="app-body">
				<AppSidebar fixed display="lg">
					<AppSidebarHeader />
					<AppSidebarForm />
					<this.controlledSidebarNav />
					<AppSidebarFooter />
					<AppSidebarMinimizer />
				</AppSidebar>
				<main className="main">
					<AppBreadcrumb appRoutes={this.controlledRoutes}/>
					<Container fluid>
						<Switch>
							{this.controlledRoutes.map((route, idx) => {
								return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
									<route.component {...props} />
								)} />)
								: (null);
							},
							)}
							<Redirect from="/" to="/dashboard" />
						</Switch>
					</Container>
				</main>
				{/*<AppAside fixed hidden>
					<DefaultAside />
				</AppAside>*/}
			</div>
			<AppFooter>
				<DefaultFooter />
			</AppFooter>
		</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		role: state.role.type
	};
};

export default connect(mapStateToProps)(DefaultLayout);
