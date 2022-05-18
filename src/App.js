import logo from './logo.svg';
import './App.css';
import Person from './Person';
function App() {
  return (
    <div className="App">
      <Person/>
       <Person name="ajay" age="23" eyecolor="gray"/>
       
       <Person name="manoj"  eyecolor="black"/>
       
       <Person name="mandeep" age="24"/>
          </div>
  );
}

export default App;
