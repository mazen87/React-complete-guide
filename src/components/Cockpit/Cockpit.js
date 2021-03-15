import React from 'react';
import classesCssModules from './Cockpit.css';

const Cockpit = (props) => {
    let classesCss = [];
    let buttonClass = [classesCssModules.Button];
    if(props.showPersons){
        buttonClass.push(classesCssModules.Red);
    }
    if(props.persons.length <= 2) {
      classesCss.push(classesCssModules.red);
    }
    if(props.persons.length <=1) {
       classesCss.push(classesCssModules.bold);
    }
    return (
       <div>
        <h1>Hi, I'm a React App</h1>
        <p className={classesCss.join(' ')} >This is really working!</p>
        
        <button className={buttonClass.join(' ')} onClick={props.clicked}>Toggle Persons</button>
       
      </div>
    );
};
export default Cockpit; 