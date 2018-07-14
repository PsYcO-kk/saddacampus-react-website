import React from 'react';
import {
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	Label,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	Button
} from 'reactstrap';
import createAdmin from '../../requests/createAdmin';

export default class CreateAdmin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			rePwd: '',
			error: '',
			rePwdValidity: false
		}
	}

	handleUsername = (e) => {
		const username = e.target.value;
		this.setState(() => ({ error: '', username: username }));
	}

	handlePassword = (e) => {
		const password = e.target.value;
		this.setState(() => ({ error: '', password: password }));
	}

	handleRePassword = (e) => {
		const rePwd = e.target.value;
		this.setState(() => ({ error: '', rePwd, rePwdValidity: false }));
		if(rePwd == this.state.password.substring(0, rePwd.length)){
			this.setState(() => ({ rePwdValidity: true }));
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			username: e.target.username.value,
			password: e.target.password.value,
			email: e.target.email.value,
			role: e.target.role.value,
			admin_token: sessionStorage.getItem('admin-token')
		}
		if(this.state.rePwdValidity){
			createAdmin(data)
			.then((response) => {
				if(response.success){
					this.setState(() => ({ error: '' }));
					this.props.history.push('/administrators');
				}
				else{
					this.setState(() => ({ error: response.message }));
				}
			})
			.catch((error) => {
				this.setState(() => ({ error: error.message }));
			});
		}
		else{
			this.setState(() => ({ error: 'Please re-enter the password correctly and try again!' }));
		}
	}

	render(){
		return(
			<Container>
				<Form onSubmit={this.handleSubmit}>
					<fieldset>
						<legend>Create New Administrator</legend>
						{this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
						<FormGroup>
							<Label htmlFor="username">Username:</Label>
							<InputGroup>
								<InputGroupAddon addonType="prepend">
									<InputGroupText><i className="icon-user"></i></InputGroupText>
								</InputGroupAddon>
								<Input type="text" name="username" id="username" placeholder="Enter Username" onChange={this.handleUsername} required />
							</InputGroup>
						</FormGroup>
						<Row>
							<Col>
								<FormGroup>
									<Label htmlFor="password">Password:</Label>
									<InputGroup>
										<InputGroupAddon addonType="prepend">
											<InputGroupText><i className="icon-key"></i></InputGroupText>
										</InputGroupAddon>
										<Input type="password" name="password" placeholder="Enter Password" onChange={this.handlePassword} required />
									</InputGroup>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Label htmlFor="rePwd">Confirm Password:</Label>
									<Input type="password" valid={!!this.state.rePwd && !!this.state.rePwdValidity} invalid={!!this.state.rePwd && !this.state.rePwdValidity} id="rePwd" placeholder="Retype Password" onChange={this.handleRePassword} required />
								</FormGroup>
							</Col>
						</Row>
						<FormGroup>
							<Label htmlFor="email">Email address:</Label>
							<InputGroup>
								<InputGroupAddon addonType="prepend">
									<InputGroupText><i className="icon-envelope"></i></InputGroupText>
								</InputGroupAddon>
								<Input type="email" name="email" placeholder="Enter email" required />
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="role">Role:</Label>
							<InputGroup>
								<InputGroupAddon addonType="prepend">
									<InputGroupText><i className="icon-tag"></i></InputGroupText>
								</InputGroupAddon>
								<Input type="select" name="role" defaultValue="maintainer" required>
									<option value="super">Super</option>
									<option value="core">Core</option>
									<option value="support">Support</option>
									<option value="maintainer">Maintainer</option>
								</Input>
							</InputGroup>
						</FormGroup>
						<Button color="primary">Submit</Button>
					</fieldset>
				</Form>
			</Container>
		);
	}
}
