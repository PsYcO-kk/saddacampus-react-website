import React from "react";

export default class NumberForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			number: '',
			error: ''
		};
	}
	validateInput = () => {
		return this.state.number.match(/^\d{10}$/);
	}
	handleNumberInput = (e) => {
		const number = e.target.value;
		if(!number || number.match(/^\d{1,10}$/)){
			this.setState(() => ({ error: '', number: number }));
		}
	}
	changeView = (message , country_code) => {
		const newState = {
			NumberForm: false,
			OtpForm: true,
			ProfileSettings: false,
      number: this.state.number,
      country_code : country_code,
			otp: '',
			message: message
		}
		this.props.changeView(newState);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const country_code = e.target.country_code.value;
		const number = this.state.number;
		if(this.validateInput()){
			fetch('http://127.0.0.1:3000/v1/membership/otp/'+country_code+'/'+number)
			.then((response) => response.json())
			.then((data) => {
				if(data.success){
					this.setState(() => ({ error: '' }));
					this.changeView(data.message,country_code);
				}
				else{
					this.setState(() => ({ error: data.message }));
				}
			})
			.catch((error) => {
				this.setState(() => ({ error }));
			});
		}
		else{
			document.getElementsByClassName('alert').className += ' alert-danger';
			this.setState(() => ({
				error: 'Please enter a valid mobile number.'
			}));
		}
	}
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
				{this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
				<label htmlFor="numberInput">Enter your mobile number to continue:</label>
				<div className="input-group mb-3">
					<select className="custom-select form-control" defaultValue="+91" name="country_code">
						<option value="+91">+91</option>
					</select>
					<input type="tel" className="form-control" name="numberInput" value={this.state.number} onChange={this.handleNumberInput} placeholder="# 7777-777777" />
					<div className="input-group-append">
						<button className="btn btn-outline-secondary" type="submit">Go</button>
					</div>
				</div>
				<small className="form-text text-muted">Don't worry. We won't stalk you.</small>
			</form>
        );
    }
}