import React from "react";
import getOTP from '../../APIcalls/getOTP';

export default class NumberForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			country_code: '',
			number: '',
			error: '',
			disableClick: false
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

	changeParentState = (message = '', loading, view) => {
		const newState = {
			loading: loading,
			NumberForm: view,
			OtpForm: !view,
			country_code : this.state.country_code,
			number: this.state.number,
			otp: '',
			message: message
		};
		this.props.changeState(newState);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const country_code = e.target.country_code.value;
		this.setState(() => ({ disableClick: true, country_code }));
		const number = e.target.numberInput.value;
		if(this.validateInput()){
			this.changeParentState('', true, true);
			getOTP({ country_code, number })
			.then((data) => {
				if(data.success){
					this.setState(() => ({ error: '' }));
					this.changeParentState(data.message, false, false);
				}
				else{
					this.setState(() => ({ disableClick: false, error: data.message }));
					this.changeParentState('', false, true);
				}
			})
			.catch((error) => {
				this.setState(() => ({ disableClick: false, error: error.message }));
				this.changeParentState('', false, true);
			});
		}
		else{
			this.setState(() => ({ disableClick: false, error: 'Please enter a valid mobile number.' }));
		}
	}

	render(){
        return(
            <form onSubmit={this.handleSubmit}>
				{this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
				<label htmlFor="numberInput">Enter your mobile number to continue:</label>
				<div className="input-group mb-3">
					<select className="custom-select form-control" defaultValue="+91" id="country_code" name="country_code" required>
						<option value="+91">+91</option>
					</select>
					<input type="tel" className="form-control" id="numberInput" name="numberInput" value={this.state.number} onChange={this.handleNumberInput} placeholder="# 7777-777777" required />
					<div className="input-group-append">
						<button className="btn btn-outline-secondary" type="submit" disabled={this.state.disableClick}>Go</button>
					</div>
				</div>
				<small className="form-text text-muted">Don't worry. We won't stalk you.</small>
			</form>
        );
    }
}
