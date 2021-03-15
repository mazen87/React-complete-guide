import React from 'react';
import Person from './Person/Person';
const Persons = (props) => 
    props.persons.map((person, personIndex) =>{
        return  ( //<ErrorBoundary>
           <Person  key={person.id} name={person.name} 
        age={person.age} click={()=> props.forDeletePerson(personIndex) } 
        changed={(event)=>{props.forChangeName(event, person.id)}} /> 
        //</ErrorBoundary>
        )
      });

export default Persons;