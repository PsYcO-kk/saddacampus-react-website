import React from "react";

export default class OtpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
			otp: '',
			error: '',
			disableGo: false,
			disableResend: false
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
		}
		this.props.changeState(newState);
    }

    handleSubmit = (e) => {
		e.preventDefault();
		this.setState(() => ({ disableGo: true }));
        const data = {
            country_code : this.props.country_code,
            number : this.props.number,
            otp : this.state.otp
        };
		if(this.validateInput()){
			this.changeParentState(true, true);
            fetch("http://127.0.0.1:3000/v1/membership/auth", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json"
                }
			})
			.then((response) => response.json())
			.then((response) => {
				this.changeParentState(false, true);
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
					this.setState(() => ({ disableGo: false, error: response.message }));
				}
			})
			.catch((error) => {
				this.setState(() => ({ disableGo: false, error }));
			})
		}
		else{
			this.setState(() => ({ disableGo: false, error: 'Please enter a valid OTP.' }));
		}
	}

    resend = () => {
		this.changeParentState(true, true);
		this.setState(() => ({ disableResend: true }))
        fetch('http://localhost:3000/v1/membership/otp/'+this.props.country_code+'/'+this.props.number)
        .then((response) => response.json())
        .then((data) => {
			this.changeParentState(false, true);
            if(data.success){
				this.setState(() => ({ disableResend: false, otp: '' }));
            }
            else{
                this.setState(() => ({ disableResend: false, error: data.message }));
            }
        })
        .catch((error) => {
            this.setState(() => ({ disableResend: false, error }));
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
						<button className="btn btn-outline-secondary" type="submit">Go</button>
					</div>
				</div>
				<div>Did not receive OTP? <button type="button" className="btn btn-default" onClick={this.resend} disabled={this.state.disableResend}>Resend</button></div>
				<br />
			    <small className="form-text text-muted">Don't worry. We won't stalk you.</small>
			</form>
        );
    }
}
