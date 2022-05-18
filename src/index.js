import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddNumbers from './AddNumbers';
import First ,{DisplayDetails} from './First';
import ParentComponent from './Child';
import Comment from './Comment';
import Student from './Student';
import StudentComp from './StudentWithConst';
const ele = <DisplayDetails name="Lalit" address="N Delhi"/>;

var user={"name" :"Ajay kumar" , "imgUrl":"/images/logo192.png"};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentComp/>
<Student/>
<Student address="Calcutta"/>
<Comment className="class1" comment="This is a good author" date="12/12/2022"
user={user}/>
<AddNumbers No1={10} No2={20}/> 
    {/* <ParentComponent/> */}
    {/* <App />
{ele}     <AddNumbers No1="10" No2="20"/> 
     <DisplayDetails name="Deepak Kumar" address="New Delhi" />  <First/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
