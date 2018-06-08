import React from "react";

export default class OtpForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			error: ''
		}
	}
    render(){
        return(
            <form>
				<div>{this.props.message}</div>
				{this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
				<div className="input-group mb-3">
					<input type="tel" className="form-control" name="otpInput" placeholder="Enter OTP" />
					<div className="input-group-append">
						<button className="btn btn-outline-secondary" type="submit">Go</button>
					</div>
				</div>
				<div>Did not receive OTP? <a href="#">Resend</a></div>
				<br />
				<small className="form-text text-muted">Don't worry. We won't stalk you.</small>
			</form>
        );
    }
}
