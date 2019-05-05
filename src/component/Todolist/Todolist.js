import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Task from '../Task';
import styles from './index.scss';


const Todolist = (props) => {
  const { list, changeTodolistStatus, } = props;
  return (
    <div className={styles.list_block}>
      {list.onEdit
        ? <Task list={list} />
        : (
          <List
            list={list}
            changeTodolistStatus={changeTodolistStatus}
          />
        )
      }
    </div>
  );
};

Todolist.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number,
    onEdit: PropTypes.bool,
    important: PropTypes.bool,
    completed: PropTypes.bool,
    title: PropTypes.string,
    deadlineDate: PropTypes.string,
    deadlineTime: PropTypes.string,
    file: PropTypes.string,
    uploadFileTime: PropTypes.string,
    description: PropTypes.string,
  }),
};

Todolist.defaultProps = {
  list: {
    id: 0,
    onEdit: false,
    important: false,
    completed: false,
    title: '',
    deadlineDate: '',
    deadlineTime: '',
    file: '',
    uploadFileTime: '',
    description: '',
  },
};

export default Todolist;
