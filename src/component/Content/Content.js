import React from 'react';
import { Route } from 'react-router-dom';
import MyTasks from './MyTasks.js';
import InProgress from './InProgress.js';
import Completed from './Completed.js';
import styles from './index.scss';

const Content = () => (
  <div className={styles.content}>
    <Route exact path="/" component={MyTasks} />
    <Route path="/inProgress" component={InProgress} />
    <Route path="/completed" component={Completed} />
  </div>
);

export default Content;
