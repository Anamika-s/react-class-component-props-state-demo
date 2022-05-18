import React, {Component} from 'react';
export default class StudentComp extends React.Component{

  constructor(props)
  {
  super(props);
  
  this.state=
  {
    name : "Ajay",
    // address:"Delhi"
    address:this.props.address
  }
 }
 Method1=()=>
 
 {
   alert("Method is called" , this);
   this.setState({name:"Deepak", address:"Haryana"});
   console.log(this.state.name);
   console.log(this.state.address);
 }
  render()
  {
    return(
      <div>
 <h1> Welcome {this.state.name} at {this.state.address} </h1>
 <button type="button" onClick={this.Method1}> Update State </button>  
 </div>
 );
  }
}