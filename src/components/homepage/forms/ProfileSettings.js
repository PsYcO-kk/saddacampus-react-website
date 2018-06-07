import React from "react";

export default class ProfileSettings extends React.Component {
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
				<div id="profileSettings">
					<div className="form-group">
						<label htmlFor="avatar">Upload an Avatar:</label>
						<input type="file" className="form-control-file" id="avatar" />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="username" placeholder="Enter Username" minLength="5" maxLength="25" required />
						<div id="feedback"></div>
					</div>
					<button id="create" className="btn btn-success" type="submit">Create Account</button>
				</div>
				<br />
			</form>
        );
    }
}
