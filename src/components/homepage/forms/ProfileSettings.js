import React from "react";
import _ from 'underscore';
import createProfile from '../../APIcalls/createProfile';
import checkUsernameAvailability from '../../APIcalls/checkUsernameAvailability';

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

    handleSubmit = (e) => {
        e.preventDefault();
		this.setState(() => ({ disableClick: true }));
        const data = {
            country_code : this.props.country_code,
            number : this.props.number,
            username : this.state.username,
			profilepic : this.state.profilepic,
			token: sessionStorage.getItem('token')
		}
		createProfile(data)
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
			this.setState(() => ({ disableClick: false, error: error.message }));
		});
    }

    handleUsernameInput = (e) => {
        this.setState(() => ({ error: '', feedback: '' }));
		const username = e.target.value;
		this.setState(() => ({ username }));
        if(this.validateUsername()){
			checkUsernameAvailability(username)
            .then((data) => {
                if(data.success){
					if(data.isAvailable){
						this.setState(() => ({ disableClick: false, feedback: 'Username available.' }))
					}
					else{
						this.setState(() => ({ disableClick: true, feedback: 'Username not available.' }))
					}
                }
			})
			.catch((error) => {
				this.setState(() => ({ disableClick: true, error: error.message }));
			})
        }
        else{
			this.setState(() => ({ disableClick: true, feedback: 'Username must be within 5-25 characters.' }))
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
					<input type="text" className={
						"form-control" + (this.state.feedback ? (this.state.feedback === 'Username available.' ? ' is-valid' : ' is-invalid') : '')
					} id="username" value={this.state.username} onChange={this.handleUsernameInput} placeholder="Enter Username" required />
					<div id="feedback" className={
						this.state.feedback ? (this.state.feedback === 'Username available.' ? 'valid-feedback' : 'invalid-feedback') : ''
					}>{this.state.feedback}</div>
				</div>
				<button className="btn btn-success" type="submit" disabled={this.state.disableClick}>Create Account</button>
			</form>
        );
    }
}
