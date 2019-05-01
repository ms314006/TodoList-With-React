import React from 'react';
import Tab from './Tab.js';
import styles from './index.scss';

const Header = () => (
  <div className={styles.header}>
    <Tab to="/" text="My Tasks" />
    <Tab to="/inProgress" text="In Progress" />
    <Tab to="/completed" text="Completed" />
  </div>
);

export default Header;
