import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { ADD_TODOLIST, CHANGE_TODOLIST_STATUS } from '../../actions/todolist';
import styles from './index.scss';

const Task = (props) => {
  const {
    switchAddTask,
    list,
    addTodoList,
  } = props;
  const [data, changeData] = useState(list);

  const changeTodolistStatus = (status) => {
    const nowStatus = data[status];
    changeData({
      ...data,
      [status]: !nowStatus,
    });
  };

  return (
    <div className={styles.task_block}>
      <Header
        list={data}
        changeData={changeData}
        changeTodolistStatus={changeTodolistStatus}
      />
      <Content list={data} changeData={changeData} />
      <Footer
        switchAddTask={switchAddTask}
        addTodoList={() => { addTodoList(data); }}
      />
    </div>
  );
};

Task.propTypes = {
  switchAddTask: PropTypes.func,
  list: PropTypes.shape({
    id: PropTypes.number,
    onEdit: PropTypes.bool,
    important: PropTypes.bool,
    completed: PropTypes.bool,
    title: PropTypes.string,
    deadlineDate: PropTypes.string,
    deadlineTime: PropTypes.string,
    file: PropTypes.string,
    description: PropTypes.string,
  }),
  addTodoList: PropTypes.func,
};

Task.defaultProps = {
  switchAddTask: () => { console.log('Task'); },
  list: {
    id: 0,
    onEdit: false,
    important: false,
    completed: false,
    title: '',
    deadlineDate: '',
    deadlineTime: '',
    file: '',
    description: '',
  },
  addTodoList: () => { console.log('Task addTodoList'); },
};

const mapDispatchToProps = dispatch => ({
  addTodoList: list => (
    dispatch({
      type: ADD_TODOLIST,
      list,
    })),
  changeTodolistStatus: status => (
    dispatch({
      type: CHANGE_TODOLIST_STATUS,
      status,
    })
  ),
});

export default connect(null, mapDispatchToProps)(Task);
