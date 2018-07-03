import React, { Fragment } from "react"
import Card from "./Card"
import 'bootstrap/dist/css/bootstrap.min.css';

var CardComponent=[];
export default class test extends React.Component{
    constructor(props)
    {
        super(props);
    }
    CardUpdate = ()=>{
        if(this.props.ImageLink.ImageLink.length)
    {
      CardComponent = this.props.ImageLink.ImageLink.map((links)=>{
           return <li key={links.link}> <Card link={links.link} name={links.restrauntName} open={links.open}/></li>
         })
    }
     else{
         CardComponent = [];
     }
    }
    render(){
        this.CardUpdate();
        return(
    <div className="container">
      <div className="row"> 
      {CardComponent}
      </div>
    </div>
        )
    }
}