import React,{Component} from "react";



export default class NumberForm extends React.Component {
   constructor(props){
    super(props);
    this.state = {
        errorDisplay : false
    }
   
   }
    textInput = null;
    DisplayReturn = (args) => {
        if(args)
            return "block";
        else
            return "none";
    }

    checkDisplay = {
        "display" : this.DisplayReturn(this.props.display)
    }

    errorDisplay = ()=> {
          var args = this.state.errorDisplay;
          return(
             { "display" : this.DisplayReturn(args)}
          );
    }
    validate =  (id)=>{
		if(((id=='#numberInput' && this.textInput.value.length==10))) return true;
		return false;
    }
    
    keyPress = (e)=> {
        this.setState({
            errorDisplay : false
        });
        if(e.which == 13)
        {
            e.preventDefault();
            this.GoClick();
        }
    }

    GoClick = (event)=> {
       if(this.validate('#numberInput')){
	       this.setState({
                errorDisplay : false
            })
        }
		else{
            this.setState({
            errorDisplay : true
            })
           
		}
    };

    setTextInputRef = element => {
        this.textInput = element;
      };

    render(){
        return(
            <form style={this.checkDisplay}>
				<label id="inputLabel" htmlFor="numberInput">Enter your mobile number to continue:</label>
				<div id="telephoneDiv" className="input-group mb-3">
					<select className="custom-select form-control" defaultValue="+91" id="country_code">
						<option value="+91">+91</option>
					</select>
					<input type="tel" className="form-control" id="numberInput" aria-describedby="numberHelp" minLength="10" maxLength="10" placeholder="# 7777 777777" ref= {this.setTextInputRef} onKeyDown={this.keyPress} />
					<div className="input-group-append">
						<button id="go" className="btn btn-outline-secondary" type="button" onClick={this.GoClick}>Go</button>
					</div>
				</div>
				<br />
		        <span id="numberLengthAlert" className="alert alert-danger" style={this.errorDisplay()}>Please enter a valid mobile number.</span>
				<small id="numberHelp" className="form-text text-muted">Don't worry. We won't stalk you.</small>
			</form>
        );
    }
}
