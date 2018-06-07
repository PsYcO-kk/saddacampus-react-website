import React from "react";

class NoPart extends React.Component {

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
            <h1 style={this.checkDisplay}>
               From NoPart
            </h1>
        )
    }
}

export default NoPart;