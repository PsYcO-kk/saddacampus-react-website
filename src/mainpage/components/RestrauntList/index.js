import React, { Fragment } from "react";
import data from "./../../ImageLink.json"
import CardGroup from "./CardGroup"
import SubHeading from "./SubHeading"
import Footer from "./../Footer"
import "./../../styles/test.css"

 export default class Final extends React.Component{
    constructor(props)
    {
        super(props);
        this.state= {
            ImageLink : data
          }
    }
   render(){
        return(
             <Fragment>
             <SubHeading history={this.props.history}/>
             <CardGroup ImageLink={this.state.ImageLink} />
             <Footer />
             </Fragment>
        )
    }
}