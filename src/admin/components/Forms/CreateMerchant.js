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
import createMerchant from '../../requests/createMerchant';

export default class CreateMerchant extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			password: '',
			rePwd: '',
			number: '',
			alternate_number: '',
			error: '',
			rePwdValidity: false
		}
	}

	handleName = (e) => {
		const name = e.target.value;
		this.setState(() => ({ error: '', name }));
	}

	handlePassword = (e) => {
		const password = e.target.value;
		this.setState(() => ({ error: '', password }));
	}

	handleRePassword = (e) => {
		const rePwd = e.target.value;
		this.setState(() => ({ error: '', rePwd, rePwdValidity: false }));
		if(rePwd == this.state.password.substring(0, rePwd.length)){
			this.setState(() => ({ rePwdValidity: true }));
		}
	}

	validateNumber = () => {
		return this.state.number.match(/^\d{10}$/);
	}

	validateAlternateNumber = () => {
		return this.state.alternate_number.match(/^\d{10}$/);
	}

	handleNumber = (e) => {
		const number = e.target.value;
		if(!number || number.match(/^\d{1,10}$/)){
			e.currentTarget.name === 'number' ? this.setState(() => ({ error: '', number })) : this.setState(() => ({ error: '', alternate_number: number }));
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			name: e.target.name.value,
			password: e.target.password.value,
			email: e.target.email.value,
			country_code: e.target.country_code.value,
			number: e.target.number.value,
			alternate_country_code: e.target.alternate_number.value !== '' ? e.target.alternate_country_code.value : '',
			alternate_number: e.target.alternate_number.value,
			admin_token: sessionStorage.getItem('admin-token')
		}
		if(this.state.rePwdValidity){
			if(this.validateNumber()){
				if(this.state.alternate_number==='' ? true : this.validateAlternateNumber()){
					createMerchant(data)
					.then((response) => {
						if(response.success){
							this.setState(() => ({ error: '' }));
							this.props.history.push('/merchants');
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
					this.setState(() => ({ error: 'Please enter a valid (alternate) number!' }));
				}
			}
			else{
				this.setState(() => ({ error: 'Please enter a valid number!' }));
			}
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
						<legend>Create New Merchant</legend>
						{this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
						<FormGroup>
							<Label htmlFor="name">Name:</Label>
							<InputGroup>
								<InputGroupAddon addonType="prepend">
									<InputGroupText><i className="icon-user"></i></InputGroupText>
								</InputGroupAddon>
								<Input type="text" name="name" id="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleName} required />
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="email">Email address:</Label>
							<InputGroup>
								<InputGroupAddon addonType="prepend">
									<InputGroupText><i className="icon-envelope"></i></InputGroupText>
								</InputGroupAddon>
								<Input type="email" name="email" placeholder="Enter email" required />
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
										<Input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handlePassword} required />
									</InputGroup>
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Label htmlFor="rePwd">Confirm Password:</Label>
									<Input type="password" valid={!!this.state.rePwd && !!this.state.rePwdValidity} invalid={!!this.state.rePwd && !this.state.rePwdValidity} id="rePwd" placeholder="Retype Password" value={this.state.rePwd} onChange={this.handleRePassword} required />
								</FormGroup>
							</Col>
						</Row>
						<FormGroup>
							<Label>Contact No. :</Label>
							<InputGroup>
								<InputGroupAddon addonType="prepend">
									<Input type="select" name="country_code" defaultValue="+91" required>
										<option value="+91">+91</option>
									</Input>
								</InputGroupAddon>
								<Input type="tel" name="number" placeholder="Enter Number" value={this.state.number} onChange={this.handleNumber} required />
							</InputGroup>
						</FormGroup>
						<FormGroup>
							<Label>Alternate Contact No. (Optional) :</Label>
							<InputGroup>
								<InputGroupAddon addonType="prepend">
									<Input type="select" name="alternate_country_code" defaultValue="+91" required>
										<option value="+91">+91</option>
									</Input>
								</InputGroupAddon>
								<Input type="tel" name="alternate_number" placeholder="Enter Alternate Number" value={this.state.alternate_number} onChange={this.handleNumber} required />
							</InputGroup>
						</FormGroup>
						<Button color="primary">Submit</Button>
					</fieldset>
				</Form>
			</Container>
		);
	}
}
