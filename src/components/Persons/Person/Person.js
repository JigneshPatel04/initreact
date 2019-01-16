import React, { Component } from 'react';
import styles from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside constuctor ', props);
  }

  componentWillMount() {
    console.log('[Person.js] inside  componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] inside  componentDidMount()');
  }
  render() {
    console.log('[Person.js] inside  render()');
    return (
      <div className={styles.Person}>
        <p onClick={this.props.click}>
          I am {this.props.click} {this.props.name} and I am {this.props.age}{' '}
          year old
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} />
      </div>
    );
  }
}

export default Person;
