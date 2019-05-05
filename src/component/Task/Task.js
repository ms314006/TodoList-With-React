import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { addTodolist } from '../../actions/todolist';
import styles from './index.scss';

const Task = (props) => {
  const {
    switchAddTask,
    list,
    addTodolist,
  } = props;
  const [data, changeData] = useState(list);

  const changeTodolistStatus = (id, status) => {
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
        addTodoList={() => { addTodolist(data); }}
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
  addTodolist: PropTypes.func,
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
  addTodolist: () => { console.log('Task addTodolist'); },
};

const mapDispatchToProps = dispatch => ({
  addTodolist: (list) => { dispatch(addTodolist(list)); },
});

export default connect(null, mapDispatchToProps)(Task);
