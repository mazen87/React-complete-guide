import React, { Component } from 'react';
//import './App.css';
import classesCssModules from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import Radium , {StyleRoot} from 'radium';
//import styled from 'styled-components';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliaire';
import AuthContext from '../context/auth-context';
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
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    //this.setState = some code here 
  };

  state = {
    persons: [
      { id:'fkgtgi23',  name: 'Max',       age: 28 },
      { id:'mpoyhkh34', name: 'Manue',     age: 29 },
      { id:'fmpzer567', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons : false,
    showCockpit :true,
    changeCounter : 0,
    isAuthenticated :false
 
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }
  /*
  componentWillUnmount(){
    console.log('[App.js] componentWillMount');
  };
  */

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  };

  shouldComponentUpdate (nextProps,nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
  
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
    this.setState((prevState, props)=>{
      return {persons :persons, changeCounter : prevState.changeCounter +1};}); 
      /*
      this.setState({
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value , age: 29 },
          { name: 'Stephanie', age: 27 }
        ]
      });
      */
  };

  togglePersons = () => {
    const showPersonsActually = this.state.showPersons;
    this.setState({
         showPersons :!showPersonsActually
    })
    
  }

  authentificationHandler = ()=> {
    this.setState({isAuthenticated: true});
  };
 
  render() {
    console.log('[App.js] render');
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
                 forChangeName= {this.nameChangedHandler} 
                 isAuthenticated={this.state.isAuthenticated}  /> 
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
     // <div className={classesCssModules.App}>
     //<WithClass classes={classesCssModules.App}>
     <Aux>
            <button onClick={()=>{this.setState({showCockpit:false})}} >Cockpit component </button>
          <AuthContext.Provider value={{ isAuthenticated: this.state.isAuthenticated , login:this.authentificationHandler}}> 
            {this.state.showCockpit ?
          
              <Cockpit personsLength={this.state.persons.length} 
              clicked={this.togglePersons } showPersons={this.state.showPersons} 
              appTitle={this.props.appTitle}  
              //authentification={this.authentificationHandler} 
              //isAuthenticated={this.state.isAuthenticated}
              />
                : null }
                  {persons}
         </AuthContext.Provider>     
      </Aux>
     //</WithClass>     
      //</div>
      //</StyleRoot>
    );
  }
    //return React.createElement('div',{className :'App'},React.createElement('h1',null,'Does it work?!!!!!'))
  
}

export default withClass(App , classesCssModules.App) ;
