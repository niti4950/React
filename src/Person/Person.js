import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props) =>{

    
    

    return (
        <div className="Person" >
            <p onClick={props.click}>hey person is there {props.name}, i am {Math.floor(Math.random()*100)} or {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed}></input>
        </div>
    );
}

export default person;