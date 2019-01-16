import React from 'react';
import styles from './Cockpit.css';

const Cockpit = props => {
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }

  let btnClass = '';
  if (props.showPersons) {
    btnClass = styles.Red;
  }

  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I am a App.</h1>
      <p className={assignedClasses.join(' ')}>This is really working.</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  );
};

export default Cockpit;
