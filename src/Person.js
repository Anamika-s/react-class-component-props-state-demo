import React, { Component } from 'react';

class Person extends React.Component {
  render() {
    return (
      <div> <b> Name : {this.props.name} <br/>
      Eye Color : {this.props.eyecolor} <br/>
      Age : {this.props.age} <br/>
      
      </b>
      </div>
    );
  }
}

Person.defaultProps ={
  name:"Rahul",
  eyecolor:"black",
  age:"20"
}
export default Person;