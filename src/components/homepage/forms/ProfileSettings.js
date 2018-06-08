import React from "react";
import _ from 'underscore';
export default class ProfileSettings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
			profilepic: 'dp',
            feedback : '',
			error: '',
			disableClick: true
        }
    }

    validateUsername = () => {
		if((this.state.username.length >= 5) && (this.state.username.length <= 25)) return true;
		return false;
	}

	handlePositiveFeedback = () => {
		document.getElementById('username').classList.remove("is-valid", "is-invalid");
		document.getElementById('username').classList.add("is-valid")
		document.getElementById('feedback').classList.remove("valid-feedback", "invalid-feedback")
		document.getElementById('feedback').classList.add("valid-feedback");
		this.setState(() => ({ disableClick: false }));
	}
	handleNegativeFeedback = () => {
		document.getElementById('username').classList.remove("is-valid", "is-invalid");
		document.getElementById('username').classList.add("is-invalid")
		document.getElementById('feedback').classList.remove("valid-feedback", "invalid-feedback")
		document.getElementById('feedback').classList.add("invalid-feedback");
		this.setState(() => ({ disableClick: true }));
	}

    handleSubmit = (e) => {
        e.preventDefault();
		this.setState(() => ({ disableClick: true }));
        const data = {
            country_code : this.props.country_code,
            number : this.props.number,
            username : this.state.username,
            profilepic : this.state.profilepic
        }
		fetch("http://127.0.0.1:3000/v1/membership/create", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				'x-access-token': sessionStorage.getItem('token'),
				"Content-Type": "application/json"
			}
		})
		.then((response) => response.json())
		.then((data) => {
			if(data.success){
				if(!(_.isEmpty(data.User))){
					// sessionStorage.setItem('user_exists', true);
					sessionStorage.setItem('token', data.token);
					this.setState(() => ({ error: '' }));
					// redirect to the main page
					console.log("redirect to the main page");
				}
				else{
					this.setState(()=>({ disableClick: false, error :"Server error. Please try again..." }));
				}
			}
			else{
			this.setState(()=>({ disableClick: false, error : response.message }));
			}
		})
		.catch((error) => {
			this.setState(() => ({ disableClick: false, error }));
		})
    }

    handleUsernameInput = (e) => {
        this.setState(() => ({ error: '', feedback: '' }));
		const username = e.target.value;
		this.setState(() => ({ username }));
        if(this.validateUsername()){
            fetch('http://127.0.0.1:3000/v1/membership/available/'+username)
            .then((response) => response.json())
            .then((data) => {
                if(data.success){
					if(data.isAvailable){
						this.handlePositiveFeedback();
						this.setState(() => ({ feedback: 'Username available.' }))
					}
					else{
						this.handleNegativeFeedback();
						this.setState(() => ({ feedback: 'Username not available.' }))
					}
                }
			})
			.catch((error) => {
				this.handleNegativeFeedback();
				this.setState(() => ({ error }));
			})
        }
        else{
			this.handleNegativeFeedback();
			this.setState(() => ({ feedback: 'Username must be within 5-25 characters.' }))
        }
    }

  	render(){
        return(
            <form onSubmit={this.handleSubmit}>
				{this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
				<div className="form-group">
					<label htmlFor="avatar">Upload an Avatar:</label>
					<input type="file" className="form-control-file" id="avatar" />
				</div>
				<div className="form-group">
					<input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleUsernameInput} placeholder="Enter Username" required />
					<div id="feedback">{this.state.feedback}</div>
				</div>
				<button className="btn btn-success" type="submit" disabled={this.state.disableClick}>Create Account</button>
			</form>
        );
    }
}
