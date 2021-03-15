import React, { Component } from 'react';
//import './App.css';
import classesCssModules from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import Radium , {StyleRoot} from 'radium';
//import styled from 'styled-components';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

/*
const ButtonComponent = styled.button`
        background-color : ${(props) => props.altHover ? 'red' : 'green' };
        color:white;
        font :inherit;
        border : 1px solid gris;
        padding : 8px;
        cursor: pointer;
        &:hover  {
          background-color : ${props => props.altHover ? 'salmon' : 'lightgreen'};
          color : black;

`
*/
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
    /*
    const style = {
      backgroundColor : 'green',
      color:'white',
      font :'inherit',
      border : '1px solid gris',
      padding : '8px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor : 'lightgreen',
        color : 'black',
      }
    };
    */
    //let num = this.LettersLengthHandler;
    //let buttonClass = [classesCssModules.Button];
    let persons = null ;
    if(this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons} 
                 forDeletePerson= {this.deletePersonHandler}
                 forChangeName= {this.nameChangedHandler} /> 
        /*
    <div>
        { this.state.persons.map((person, personIndex) =>{
          return  ( //<ErrorBoundary>
             <Person  key={person.id} name={person.name} 
          age={person.age} click={()=> this.deletePersonHandler(personIndex) } 
          changed={(event)=>{this.nameChangedHandler(event, person.id)}} /> 
          //</ErrorBoundary>
          )
        })}
         
    </div>
    */
    );
     
    //buttonClass.push(classesCssModules.Red);
    /*
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor : 'salemon',
        color : 'black',
      }
    */  


    }
    /*
    let classesCss = [];
    if(this.state.persons.length <= 2) {
      classesCss.push(classesCssModules.red);
    }
    if(this.state.persons.length <=1) {
       classesCss.push(classesCssModules.bold);
    }
    */
    return (
     // <StyleRoot>
      <div className={classesCssModules.App}>
      <Cockpit persons={this.state.persons} clicked={this.togglePersons } showPersons={this.state.showPersons} />
          {persons}
      </div>
      //</StyleRoot>
    );
  }
    //return React.createElement('div',{className :'App'},React.createElement('h1',null,'Does it work?!!!!!'))
  
}

export default App;
