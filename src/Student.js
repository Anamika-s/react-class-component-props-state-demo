import React, {Component} from 'react';
export default class Student extends React.Component{

  state=
  {
    name : "Ajay",
    // address:"Delhi"
    address:this.props.address
  }
  render()
  {
    return(
 <h1> Welcome {this.state.name} at {this.state.address} </h1>
    );
  }
}