import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MyTasks from './MyTasks.js';
import InProgress from './InProgress.js';
import Completed from './Completed.js';
import styles from './index.scss';

const Content = () => (
  <div className={styles.content}>
    <Switch>
      <Route exact path="/" component={MyTasks} />
      <Route path="/inProgress" component={InProgress} />
      <Route path="/completed" component={Completed} />
    </Switch>
  </div>
);

export default Content;
