import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem , Button } from 'reactstrap';

var divWidth = {
    "width"  :"100%"
}
var style = {
    "backgroundColor" : "white" ,
    "border" : "none",
    "color": "black",
    "boxShadow"  :"none"
}
var Selected={
    "color": "#707070"
}
var NotSelected = {
    "color": "black"
}

export default class SubHeading extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          selectedValue : "All"
        };
      }

      selectDropdown = (e)=>{
         const value  = e.target.innerHTML;
         this.setState(()=>({
             selectedValue : value
         }))
      }
    
      toggle = ()=>{
        this.setState({
          isOpen : !this.state.isOpen
        });
      }
    
    render(){
        return(
            <div className="container Heading" >
            <div className="row">
            <div style={divWidth} ><div className="collegeName" >IIT(ISM) DHANBAD  <hr id="hr" /></div></div>
             <div className="Filters">
             <span>Restaurants</span>
            <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle} className="buttongroup" >
            <Button id="caret" color="primary" className="dropdownButton"style={style} >{this.state.selectedValue}</Button>
            <DropdownToggle caret color="primary" style={style} className="dropdownArrow" />
            <DropdownMenu onClick={this.selectDropdown} className="dropdownMenu" >
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="All"?Selected : NotSelected } >All</DropdownItem>
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="Free Delivery"?Selected : NotSelected } >Free Delivery</DropdownItem>
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="Sort By Rating"?Selected : NotSelected } >Sort By Rating</DropdownItem>
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="Sort By Min.Order"?Selected : NotSelected } >Sort By Min.Order</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
             </div>
            </div>
            </div>
        )
    }
}