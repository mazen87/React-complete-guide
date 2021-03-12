import React from 'react';
//import './Person.css';
import classesCssModules from './Person.css';
//import Radium from 'radium';
import styled from 'styled-components';

/*
const DivCompnent = styled.div`
    width: 40%;
    margin: 16px auto;
    padding: 25px;
    border: solid 2px #eee;
    box-shadow: 0 2px 2px #ccc;
    text-align: center;

    @media (min-width: 500px)  {
        width : 650px;
    } 
    
    `
*/
const person = (props) => {
    /*
    const style = {
        '@media (min-width: 500px)' : {
            width : '650px'
        } 
    };
    */
    
    return  (
        // <DivCompnent>
   <div className={classesCssModules.Person}>   
   
        <p  onClick={props.click}> I'm {props.name}  and I am {props.age} years old! </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
  
   </div>   
     //</DivCompnent>
    )
};
export default person;