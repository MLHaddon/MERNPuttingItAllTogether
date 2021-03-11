import React, { Component } from 'react';

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ageCount: this.props.age
    }
  }
  
  addToAge = (age) => {
    this.setState({ageCount: this.state.ageCount + 1});
  }
  
  render() {
    const {firstName, lastName, age, hairColor} = this.props;
    var ageInput = age;
    return (
      <ul class="list-unstyled">
        <li><h2>{lastName}, {firstName}</h2></li>
        <li>Age: { this.state.ageCount } </li>
        <li>Hair Color: {hairColor}</li>
        <button onClick={ () => {
          return this.addToAge(ageInput);
        }}>Add to Age</button>
      </ul>
    );
  }
}

export default PersonCard;