import React, { Component , Fragment } from 'react';
//import './Person.css';
import classesCssModules from './Person.css';
//import Radium from 'radium';
import styled from 'styled-components';
import Aux from '../../../hoc/Auxiliaire';
import withClass from '../../../hoc/WithClass';

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
  //  return  
    //(
        // <DivCompnent>
  // <div className={classesCssModules.Person}>
  /*    
      render  an adjacent component by array  

     return  [ <p key="1" onClick={this.props.click}> I'm {this.props.name}  and I am {this.props.age} years old! </p>,
        <p key="2">{this.props.children}</p>,
        <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>];
    */

      return  <Aux classes={classesCssModules.Person}>  
        
                    <p onClick={this.props.click}> I'm {this.props.name}  and I am {this.props.age} years old! </p>
                    <p >{this.props.children}</p>
                    <input  type="text" onChange={this.props.changed} value={this.props.name}/>
                  
              </Aux>
   //</div>   
     //</DivCompnent>
   // );

        };
       
}
export default withClass(Person ,classesCssModules.Person );