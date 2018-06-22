import React from "react";
import getOTP from '../../../requests/getOTP';
import verifyNumber from '../../../requests/verifyNumber';

export default class OtpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
			otp: '',
			error: '',
			disableClick: false
		};
    }

	validateInput = () => {
		return this.state.otp.match(/^\d{6}$/);
	}

    handleOtpInput = (e)=>{
        const otp = e.target.value;
		if(!otp || otp.match(/^\d{1,6}$/)){
			this.setState(() => ({ error: '', otp: otp }));
		}
    }

    changeParentState = (loading, view) => {
		const newState = {
			loading: loading,
			OtpForm: view,
			ProfileSettings: !view,
			otp: this.state.otp
		};
		this.props.changeState(newState);
    }

    handleSubmit = (e) => {
		e.preventDefault();
		this.setState(() => ({ disableClick: true }));
        const data = {
            country_code : this.props.country_code,
            number : this.props.number,
            otp : e.target.otpInput.value
        };
		if(this.validateInput()){
			this.changeParentState(true, true);
			verifyNumber(data)
			.then((response) => {
				if(response.success){
					// sessionStorage.setItem('user_exists', response.user_exists);
					sessionStorage.setItem('token', response.token);
					this.setState(() => ({ error: '' }));
					if(response.user_exists){
						// redirect to the main page
						console.log("redirect to the main page");
					}
					else{
						this.changeParentState(false, false);
					}
				}
				else{
					this.setState(() => ({ disableClick: false, error: response.message }));
					this.changeParentState(false, true);
				}
			})
			.catch((error) => {
				this.setState(() => ({ disableClick: false, error: error.message }));
				this.changeParentState(false, true);
			});
		}
		else{
			this.setState(() => ({ disableClick: false, error: 'Please enter a valid OTP.' }));
		}
	}

    resend = () => {
		this.changeParentState(true, true);
		this.setState(() => ({ disableClick: true }));
		const country_code = this.props.country_code;
		const number = this.props.number;
		getOTP({ country_code, number })
        .then((data) => {
			this.changeParentState(false, true);
			this.setState(() => ({ disableClick: false }));
            if(data.success){
				this.setState(() => ({ otp: '' }));
            }
            else{
                this.setState(() => ({ error: data.message }));
            }
        })
        .catch((error) => {
            this.setState(() => ({ disableClick: false, error: error.message }));
			this.changeParentState(false, true);
        });
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
				<div>{this.props.message} Not your number? <a href="">Change it!</a></div>
				<br />
                {this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
				<div className="input-group mb-3">
					<input type="tel" className="form-control" id="otpInput" placeholder="Enter OTP" value={this.state.otp} onChange={this.handleOtpInput} required />
					<div className="input-group-append">
						<button className="btn btn-outline-secondary" type="submit" disabled={this.state.disableClick}>Go</button>
					</div>
				</div>
				<div>Did not receive OTP? <button type="button" id="resend" className="btn btn-default" onClick={this.resend} disabled={this.state.disableClick}>Resend</button></div>
				<br />
			    <small className="form-text text-muted">Don't worry. We won't stalk you.</small>
			</form>
        );
    }
}
