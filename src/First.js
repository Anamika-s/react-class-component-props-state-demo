import React , {Component} from 'react';

export default class First extends React.Component
{
   render()
{
  return( <h1> Helo from Class Component </h1> 
);
}

}

export class DisplayDetails extends React.Component
{
  render()
  {
     return (
   <h1> Hello {this.props.name} , Welcome to {this.props.address} </h1>
     );
  }
}
