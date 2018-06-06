import React from "react";

class Profile extends React.Component {
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
               From Profile
            </h1>
        )
    }
}

export default Profile;