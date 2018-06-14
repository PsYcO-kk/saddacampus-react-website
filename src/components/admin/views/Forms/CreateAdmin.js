import React from 'react';

export default class CreateAdmin extends React.Component{
	constructor(){
		super();
		this.state = {
			username: '',
			password: '',
			error: '',
			feedback: ''
		}
	}

	handleUsername = (e) => {
		const username = e.target.value;
		if(cond = true){
			this.setState(() => ({ error: '', username: username }));
		}
	}

	handlePassword = (e) => {
		const password = e.target.value;
		this.setState(() => ({ error: '', password: password }));
	}

	handleRePassword = (e) => {
		const rePwd = e.target.value;
		if(rePwd == this.state.password.substring(0, rePwd.length)){
			console.log('right');
			this.setState(() => ({ error: '', feedback: 'positive' }));
		}
		else{
			console.log('wrong');
			this.setState(() => ({ error: '', feedback: 'negative' }));
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();

	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<fieldset>
					<legend>Create Admin</legend>
					<div className="form-group">
						<label htmlFor="username">Username:</label>
						<input type="text" className="form-control" name="username" id="username" placeholder="Enter Username" />
					</div>
					<div className="row">
						<div className="col">
							<div className="form-group">
								<label htmlFor="password">Passowrd:</label>
								<input type="password" className="form-control" name="password" placeholder="Enter Password" />
							</div>
						</div>
						<div className="col">
							<div className="form-group">
								<label htmlFor="rePwd">Re-enter Password:</label>
								<input type="password" className="form-control" id="rePwd" placeholder="Retype Password" />
							</div>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email address:</label>
						<input type="email" className="form-control" name="email" placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label htmlFor="role">Role:</label>
						<select name="role" defaultValue="maintainer">
							<option value="super">Super</option>
							<option value="core">Core</option>
							<option value="support">Support</option>
							<option value="maintainer">Maintainer</option>
						</select>
					</div>
				</fieldset>
			</form>
		);
	}
}
