import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import People from './People/People';

const app = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Harsh", age: 22 },
      { name: "Harsh Mishra", age: 44 }
    ]
  });


  const switchAgeHandler = (newName) => {
    setPersonState({
      persons: [
        { name: newName, age: 99 },
        { name: "Harsh Mishra", age: 77 }
      ]
    })
  }

  const nameChangeHandler = (event) => {
    setPersonState({
      persons: [
        { name: event.target.value, age: 99 },
        { name: "Harsh Mishra", age: 77 }
      ]
    })
  }
  // inline css
  const styleInline = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px soild blue',
    padding: '8px'
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header><br />

      <button style={styleInline} onClick={() => switchAgeHandler("max")}>Switch Age</button>

      <People name={personState.persons[0].name} age={personState.persons[0].age}
        passClickRef={switchAgeHandler.bind(this, 'Harsh!!!!')} passChangedRef={nameChangeHandler} />

      <People name={personState.persons[1].name} age={personState.persons[1].age} />
    </div>
  );
}

export default app;
