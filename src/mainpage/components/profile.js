import React from "react";
import "./../styles/profile.css"

export default class Profile extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
		<div className="container profile"  >
			<div className="row">
			<div>
				<div className="info" >
					<img src="/assets/images/dp.jpg" className="profileImage" />		
					<label id="id" >ananddevesh22</label>
					<button id="editButton" >Edit Profile</button>
				</div>
				<br />
				<table>
				<tr>
					<td className="data" ><input type="text" value="Devesh Anand" disabled/></td>
					<td className="dot" ><img src="/assets/images/dot.jpeg" className="dotImage" /></td>
					<td className="data"><input type="text" value="7541833368" disabled/></td>
					<td className="dot"><img src="/assets/images/dot.jpeg" className="dotImage" /></td>
					<td ><input type="text" value="ananddevesh22@gmail.com" disabled /></td>
				</tr>
				</table>
			</div>
			  <hr className="hr" />
			  <br/>
			  <div className="row orders">
				  <div className="heading" >Orders</div>
			  </div>	  
			</div>
		</div>			
		)
	}
}