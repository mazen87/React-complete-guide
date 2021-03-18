import React from 'react';
/*
// first way to create hoc 
const WithClass = props => (
  <div className={props.classes}> {props.children} </div>
);

export default WithClass;
*/

// second way to create high order component 
const withClass = (WrappedComponent, className) =>{
    return (props) => (
        <div className={className}>
        <WrappedComponent  />
        </div>
    );
};
export default withClass;