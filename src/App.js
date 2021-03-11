import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id:'fkgtgi23',  name: 'Max',       age: 28 },
      { id:'mpoyhkh34', name: 'Manue',     age: 29 },
      { id:'fmpzer567', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons : false
  };
  
  deletePersonHandler = (personIndex) => {
    //let persons = this.state.persons.slice();
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons : persons
    }) 

  }

  nameChangedHandler = (event,id)=>{
 
    const indexPerson = this.state.persons.findIndex((p) => {
      return p.id === id ;
    });
    const person = {...this.state.persons[indexPerson]};
       //const persons = Object.assign({},this.state.persons[indexPerson]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[indexPerson] = person;
    this.setState({persons :persons}); 
      /*
      this.setState({
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value , age: 29 },
          { name: 'Stephanie', age: 27 }
        ]
      });
      */
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

    let persons = null ;
    if(this.state.showPersons) {
      persons = (

    <div>
        { this.state.persons.map((person, personIndex) =>{
          return <Person key={person.id} name={person.name} 
          age={person.age} click={()=> this.deletePersonHandler(personIndex) } 
          changed={(event)=>{this.nameChangedHandler(event, person.id)}} />
        })}
         
    </div>
    )
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersons}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
    //return React.createElement('div',{className :'App'},React.createElement('h1',null,'Does it work?!!!!!'))
  
}

export default App;
