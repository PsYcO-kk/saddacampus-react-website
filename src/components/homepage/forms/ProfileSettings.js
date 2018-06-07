import React from "react";
import _ from 'underscore';
export default class ProfileSettings extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            username : '',
            error : '',
            create_display : false
        }
    }

    validateUsername = (username)=>{
		if((username.length >= 5) && (username.length <= 25)) return true;
		return false;
    }
    
    handleSubmit = (e)=>{
        e.preventDefault();
        this.setState(()=>({create_display : true }));
        console.log(sessionStorage.getItem('token'));
        const data = {
            country_code : this.props.country_code,
            number : this.props.number,
            username : this.state.username,
            profilepic : 'dp'
        }
        console.log(data);
        fetch("http://127.0.0.1:3000/v1/membership/create", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              'x-access-token': sessionStorage.getItem('token'), 
              "Content-Type": "application/json"
             }
          })
          .then((response)=>{
              return response.json()
          })
          .then((response)=>{
               if(response.success)
               {
                    if(!(_.isEmpty(response.User)))
                    {
                        sessionStorage.setItem('user_exists', true);
                        sessionStorage.setItem('token', response.token);
                        console.log("link to main page");
                        // go to main page
                    }
                    else{
                        this.setState(()=>({create_display:true , error :"Server error.. Please try again"}));
                    }
               }
               else{
                this.setState(()=>({create_display:true , error : response.message}));
               }
          } , (err)=>{
              this.setState(()=>({error: err}));
          })
     }

    ValidateChange = (e)=>{
        document.getElementById('feedback').innerHTML = "";
        const username = e.target.value;
        if(this.validateUsername(username)){
            fetch('http://127.0.0.1:3000/v1/membership/available/'+username)
            .then((response) => response.json())
            .then((data) => {
                if(data.success){
                        document.getElementById('username').classList.remove("is-invalid");
                        document.getElementById('username').classList.add("is-valid")
                        document.getElementById('feedback').classList.remove("invalid-feedback")
                        document.getElementById('feedback').classList.add("valid-feedback");
                        document.getElementById('feedback').innerHTML= "'Username available'"
                        this.setState(()=>({create_display : false , username: username }))
                }
                else{
                        document.getElementById('username').classList.remove("is-valid");
                        document.getElementById('username').classList.add("is-invalid")
                        document.getElementById('feedback').classList.remove("valid-feedback")
                        document.getElementById('feedback').classList.add("invalid-feedback");
                        document.getElementById('feedback').innerHTML= "'Username not available'"
                        this.setState(()=>({create_display : true }))
                    }
            })
            .catch((error) => {
                this.setState(() => ({ error }));
            });
 
        }
        else{
           document.getElementById('username').classList.remove("is-valid");
           document.getElementById('username').classList.add("is-invalid")
           document.getElementById('feedback').classList.remove("valid-feedback")
           document.getElementById('feedback').classList.add("invalid-feedback");
           document.getElementById('feedback').innerHTML= "'Username must be within 5-25 characters.'"
           this.setState(()=>({create_display : true }))
        }
      

    }

  
  render(){
        return(
            <form>
				<div id="profileSettings">
                  {this.state.error && <div id="otpAlert" className="alert alert-danger">{this.state.error}</div>} 
					<div className="form-group">
						<label htmlFor="avatar">Upload an Avatar:</label>
						<input type="file" className="form-control-file" id="avatar" />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="username" onChange={this.ValidateChange} placeholder="Enter Username" minLength="5" maxLength="25" required />
						<div id="feedback"></div>
					</div>
					<button id="create" className="btn btn-success" disabled={this.state.create_display} onClick={this.handleSubmit} type="submit">Create Account</button>
				</div>
				<br />
			</form>
        );
    }
}
