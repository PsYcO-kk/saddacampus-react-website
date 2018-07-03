import React from "react";

var Heading = {
    "marginBottom" : "0px"
}
const Card = (props)=>(
    <div className="card">
    <img className="card-img-top" src={props.link} alt="Card image cap"/>
    <div className="card-body" >
    <h5 className={"card-title "+ ( props.open?"card-open":"card-close")}  title={props.open?"Click to order":"Sorry restraunt is closed"} style={Heading} >{props.name}</h5>
    <span className="subHeading" >BurgerWings</span>
    <div className="rating"><img src="/assets/images/ic_star_24px.png" className="starImage" /> <span className="ratingText"> 4.5</span></div>
    <span className="InfoPart">Min Order-: 200  <img src="/assets/images/dot.jpeg" className="dot" />  Free delivery</span>
  </div>
   </div>
)

export default Card;