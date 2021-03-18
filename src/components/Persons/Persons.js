import React, { Component ,PureComponent} from 'react';
import Person from './Person/Person';
//const Persons = (props) =>{
class Persons extends PureComponent {
    /*
    static getDerivedStateFromProps(state,props) {
        console.log('[Persons.js]  getDerivedStateFromProps');
        return state;
    }
    */
   /*
   componentWillReceiveProps(props) {
    console.log('[Persons.js]  componentWillReceiveProps]',props);
   }
   */

   /*
    shouldComponentUpdate (nextProps,nextState) {
        
        console.log('[Persons.js]  shouldComponentUpdate');
        if(    nextProps.persons !== this.props.persons 
           ||  nextProps.forDeletePerson !== this.props.forDeletePerson    
           ||  nextProps.forChangeName !== this.props.forChangeName
            ){
            return true
        }else{
            return false;
        }
        
    }
    */  

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message : 'snapShot !'};
    }
    /*
    componentWillUpdate() {
        console.log('[Persons.js] componentWillUpdate');
    }
    */
    componentDidUpdate (prevState,prevProps ,snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering ... ');
        return this.props.persons.map((person, personIndex) =>{
            return  ( //<ErrorBoundary>
               <Person  key={person.id} name={person.name} 
            age={person.age} click={()=> this.props.forDeletePerson(personIndex) } 
            changed={(event)=>{this.props.forChangeName(event, person.id)}} /> 
            //</ErrorBoundary>
            )
          });
    }  

 
    };
export default Persons;