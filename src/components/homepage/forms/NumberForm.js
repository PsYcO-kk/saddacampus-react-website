import React from "react";

export default class NumberForm extends React.Component {
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
				<label id="inputLabel" htmlFor="numberInput">Enter your mobile number to continue:</label>
				<div id="telephoneDiv" className="input-group mb-3">
					<select className="custom-select form-control" defaultValue="+91" id="country_code">
						<option value="+91">+91</option>
					</select>
					<input type="tel" className="form-control" id="numberInput" aria-describedby="numberHelp" minLength="10" maxLength="10" placeholder="# 7777 777777" />
					<div className="input-group-append">
						<button id="go" className="btn btn-outline-secondary" type="button">Go</button>
					</div>
				</div>
				<br />
				<span id="numberAlert" className="alert alert-danger"></span>
				<small id="numberHelp" className="form-text text-muted">Don't worry. We won't stalk you.</small>
			</form>
        );
    }
}
