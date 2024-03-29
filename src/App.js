import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:"1", name: 'Max', age: 28 },
      {id:"2", name: 'Manu', age: 29 },
      {id:"3", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]  = person;

    this.setState( {persons:persons} )
  }

  togglePersonHandler = () =>{
  const togglePerson = this.state.showPersons;
  this.setState({showPersons: !togglePerson});  
  }

  deletePersonHandler = (index) =>{
   // const persons = this.state.persons;
  // const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }

  render () {
    const style = {
      backgroundColor:'green',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor: 'pointer',
      color:'white',
      
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) =>{
            return <Person 
                    click={()=> this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event)=> this.nameChangedHandler(event,person.id)}/>
          })}
          </div>
      )
      style.backgroundColor = 'red'
      
    } 

    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        
        <button style={style}
        onClick={this.togglePersonHandler}>Toggle person</button>
       {persons}
      </div>
      
    ); 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
