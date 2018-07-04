import React from "react";

var Heading = {
    "marginBottom" : "0px"
}
const Card = (props)=>(
	<div className={"card "+ ( props.data.open?"card-open":"card-close")}>
		<img className="card-img-top" src={props.data.link} alt="Card image cap"/>
		<div className="card-body" >
			<h5 className={"card-title "}  title={props.data.open?"Click to order":"Sorry restraunt is closed"} style={Heading} >{props.data.name}</h5>
			<span className="subHeading" >{props.data.speciality}</span>
			<div className="rating"><img src="/assets/images/ic_star_24px.png" className="starImage" /> <span className="ratingText"> 4.5</span></div>
			<div className="InfoPart"> <span >Min Order : {props.data.min_order}</span><span><img src="/assets/images/dot.jpeg" className="dot" /></span> <span>{props.data.delivery}</span></div>
		</div>
	</div>
)

export default Card;
