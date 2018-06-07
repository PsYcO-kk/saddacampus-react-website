import React from "react";

export default class OtpForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
			otp: '',
			error: ''
		};
    }
    
    validateInput = () => {
		return this.state.otp.match(/^\d{6}$/);
	}

    handleChange = (e)=>{
        const otp = e.target.value;
		if(!otp || otp.match(/^\d{1,10}$/)){
			this.setState(() => ({ error: '', otp: otp }));
		}
    }

    changeView = () => {
		const newState = {
			NumberForm: false,
			OtpForm: false,
			ProfileSettings: true,
            number: this.props.number,
            country_code : this.props.country_code,
			otp: this.state.otp,
			message: this.props.message
		}
		this.props.changeView(newState);
    }
    
    RevertView = () => {
		const newState = {
			NumberForm: true,
			OtpForm: false,
			ProfileSettings: false,
            number:'',
            country_code : '',
			otp: '',
			message: ''
		}
		this.props.changeView(newState);
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        const otp = this.state.otp;
        const data = {
            country_code : this.props.country_code,
            number : this.props.number,
            otp : otp
        };
        console.log(data);
		if(this.validateInput()){
            fetch("http://127.0.0.1:3000/v1/membership/auth", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json"
                }
              })
              .then((response)=>{
                  return response.json()
              })
              .then((response)=>{
                   if(response.success)
                   {
                      sessionStorage.setItem('user_exists', response.user_exists);
                      sessionStorage.setItem('token', response.token);
                        if(response.user_exists)
                       {
                           console.log("redirect to the main page");
                          // redirect to the main page
                       }
                      else{
                          this.setState(()=> ({error:''}));
                          this.changeView();
                       }
                   }
                   else{
                    this.setState(() => ({
                        error: response.message
                    }));
                   }
              })
              .catch((err)=>{
                  this.setState(()=>({error:err}));
              })

    }
    else{
        this.setState(() => ({
            error: 'Please enter a valid otp'
        }));
    }
}
    
    resend =()=>{
        fetch('http://localhost:3000/v1/membership/otp/'+this.props.country_code+'/'+this.props.number)
        .then((response) => response.json())
        .then((response) => {
            if(response.success){
              
            }
            else{
                this.setState(() => ({ error: data.message }));
            }
        })
        .catch((error) => {
            this.setState(() => ({ error }));
        });
    }
    

    render(){
        return(
            <form>
                {this.state.error && <div id="otpAlert" className="alert alert-danger">{this.state.error}</div>}
				<div id="changeNumber">{this.props.message} Not your number? <a href="#" onClick={this.RevertView}>Change it!</a></div>
				<div id="otpDiv" className="input-group mb-3">
					<input type="tel" className="form-control" id="otpInput" aria-describedby="numberHelp" minLength="6" maxLength="6" placeholder="Enter OTP" onChange={this.handleChange} />
					<div className="input-group-append">
						<button id="submit" className="btn btn-outline-secondary" type="submit" onClick={this.handleSubmit}>Go</button>
					</div>
				</div>
				<div id="resendOTP">Did not receive OTP? <a id="resend" href="#" onClick={this.resend}>Resend</a></div>
				<br />
			    <small id="otpHelp" className="form-text text-muted">Don't worry. We won't stalk you.</small>
			</form>
        );
    }
}
