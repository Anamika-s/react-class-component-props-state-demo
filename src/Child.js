import React, {Component} from 'react';
// export default function Child(props)
// {
//   return (

//   );
// }

const ChildComp = (props)=>
{
  return <p> I am a child component
    My text is {props.text} </p>
};
 
export default class ParentComponent extends  React.Component
{
  render()
  {
    return (
          <h1>
            I m parent Component
            <ChildComp text="This is First"/>
            <ChildComp text="This is Second"/>
            <ChildComp text="This is Third"/>
            </h1>
    );
  }
}