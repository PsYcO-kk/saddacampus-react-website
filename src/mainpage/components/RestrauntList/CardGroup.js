import React, { Fragment } from "react"
import Card from "./Card"
import 'bootstrap/dist/css/bootstrap.min.css';

var CardComponent=[];
export default class test extends React.Component{
    constructor(props){
        super(props);
    }
    CardUpdate = ()=>{
        if(this.props.restaurants.data.length){
			CardComponent = this.props.restaurants.data.map((info)=>{
				return <li key={info.link}> <Card data={info}/></li>
			});
		}else{
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
        );
    }
}
