import React from 'react';
import { connect } from 'react-redux';

class Logout extends React.Component{
	componentDidMount(){
		sessionStorage.removeItem('admin-role');
		sessionStorage.removeItem('admin-token');
		this.props.updateRole();
		this.props.history.push('/admin/login');
	}

	render(){
		return(
			<div></div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateRole: () => dispatch({ type: 'UPDATE_ROLE' })
});

export default connect(undefined, mapDispatchToProps)(Logout);
