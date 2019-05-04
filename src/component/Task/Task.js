import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import styles from './index.scss';

const Task = (props) => {
  const { switchAddTask, } = props;
  return (
    <div className={styles.task_block}>
      <Header />
      <Content />
      <Footer switchAddTask={switchAddTask} />
    </div>
  );
};


Task.propTypes = {
  switchAddTask: PropTypes.func,
};

Task.defaultProps = {
  switchAddTask: () => { console.log('Task'); },
};

export default Task;
