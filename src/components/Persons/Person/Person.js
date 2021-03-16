import React, { Component } from 'react';
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
//const person = (props) => {
    class Person extends Component {
        render (){
    console.log('[Person.js] rendering ...');
    /*
    const style = {
        '@media (min-width: 500px)' : {
            width : '650px'
        } 
    };
    */
   /*
    const random = Math.random();
    if (random > 0.7) {
        throw new Error('something went wrong !');
    }
    */
    return  (
        // <DivCompnent>
   <div className={classesCssModules.Person}>   
   
        <p  onClick={this.props.click}> I'm {this.props.name}  and I am {this.props.age} years old! </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
  
   </div>   
     //</DivCompnent>
    );

        };
       
}
export default Person;