import React, { Component } from 'react';
import styles from './Person.css';

const person = props => {
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        I am {props.click} {props.name} and I am {props.age} year old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default person;
