import React from "react";

export default class OtpForm extends React.Component {
    DisplayReturn = () => {
        if(this.props.display)
            return "block";
        else
            return "none";
    }

    checkDisplay = {
        "display" : this.DisplayReturn()
    }

    render(){
        return(
            <form style={this.checkDisplay}>
				<div id="changeNumber"></div>
				<div id="otpDiv" className="input-group mb-3">
					<input type="tel" className="form-control" id="otpInput" aria-describedby="numberHelp" minLength="6" maxLength="6" placeholder="Enter OTP" />
					<div className="input-group-append">
						<button id="submit" className="btn btn-outline-secondary" type="button">Go</button>
					</div>
				</div>
				<div id="resendOTP">Did not receive OTP? <a id="resend" href="#">Resend</a></div>
				<br />
				<span id="otpAlert" className="alert alert-danger"></span>
				<small id="otpHelp" className="form-text text-muted">Don't worry. We won't stalk you.</small>
			</form>
        );
    }
}
