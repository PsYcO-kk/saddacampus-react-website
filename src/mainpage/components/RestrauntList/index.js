import React, { Fragment } from "react";
import RestaurantData from "../../RestaurantData.json";
import CardGroup from "./CardGroup";
import SubHeading from "./SubHeading";
import Footer from "./../Footer";
import "./../../styles/test.css";

 export default class Final extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : RestaurantData
        };
    }
   render(){
        return(
			<Fragment>
				<SubHeading history={this.props.history}/>
				<CardGroup restaurants={this.state.data} />
				<Footer />
			</Fragment>
        )
    }
}
