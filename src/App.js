import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { name: "Onu", age: 6.5 },
      { name: "misti", age: 6.5 },
      { name: "avani", age: 9 }
    ],
    showPersons: false
  }


  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 6.5 },
        { name: "misti", age: 6.5 },
        { name: "avani", age: 10 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Onu Panwar', age: 6.5 },
        { name: event.target.value, age: 6.5 },
        { name: "avani", age: 10 }
      ]
    })
  }

  togglepersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
      <div>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}>I love eating EGGS!!!</Person>
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Veronica Panwar')}
        changed={this.nameChangeHandler} />
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age} />
    </div>
      )}

    return (
      <div className="App">
        <h1>This is a react app</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglepersonsHandler}>toggle persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
