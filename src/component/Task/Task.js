import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import styles from './index.scss';

const Task = (props) => {
  const { switchAddTask, list, } = props;
  const [data, changeData] = useState(list);
  return (
    <div className={styles.task_block}>
      <Header list={data} changeData={changeData} />
      <Content list={data} changeData={changeData} />
      <Footer switchAddTask={switchAddTask} />
    </div>
  );
};

Task.propTypes = {
  switchAddTask: PropTypes.func,
  list: PropTypes.shape({
    id: PropTypes.number,
    onEdit: PropTypes.bool,
    import: PropTypes.bool,
    completed: PropTypes.bool,
    title: PropTypes.string,
    deadlineDate: PropTypes.string,
    deadlineTime: PropTypes.string,
    file: PropTypes.string,
    description: PropTypes.string,
  }),
};

Task.defaultProps = {
  switchAddTask: () => { console.log('Task'); },
  list: {
    id: 0,
    onEdit: false,
    import: false,
    completed: false,
    title: '',
    deadlineDate: '',
    deadlineTime: '',
    file: '',
    description: '',
  },
};

export default Task;
