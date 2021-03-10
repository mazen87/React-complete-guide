import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manue', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons : false
  };
  
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manue', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event)=>{
      this.setState({
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value , age: 29 },
          { name: 'Stephanie', age: 27 }
        ]
      });
  }

  togglePersons = () => {
    const showPersonsActually = this.state.showPersons;
    this.setState({
         showPersons :!showPersonsActually
    })
    
  }

  render() {
    const style = {
      backgroundColor : 'white',
      font :'inherit',
      border : '1px solid gris',
      padding : '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersons}>Switch Name</button>
       {  this.state.showPersons === true  ? 
           <div>
           <Person
           click={this.switchNameHandler.bind(this, 'Maximiliano')}
           name={this.state.persons[0].name}
           age={this.state.persons[0].age}
         />
         <Person
           name={this.state.persons[1].name}
           age={this.state.persons[1].age}
           changed={this.nameChangedHandler}
         >
           My Hobbies: Racing
         </Person>
         <Person
           name={this.state.persons[2].name}
           age={this.state.persons[2].age}
         />
    </div>
    : null
       }
        
      </div>
    );
  }
    //return React.createElement('div',{className :'App'},React.createElement('h1',null,'Does it work?!!!!!'))
  
}

export default App;
