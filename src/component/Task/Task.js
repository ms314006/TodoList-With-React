import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { addTodolist, modifyTodolist } from '../../actions/todolist';
import styles from './index.scss';

const Task = (props) => {
  const {
    switchAddTask,
    list,
    modelType,
    addTodolist,
    modifyTodolist,
  } = props;
  const [data, changeData] = useState(list);

  return (
    <div className={styles.task_block}>
      <Header
        list={data}
        changeData={changeData}
      />
      <Content list={data} changeData={changeData} />
      <Footer
        data={data}
        modelType={modelType}
        switchAddTask={switchAddTask}
        addTodolist={addTodolist}
        modifyTodolist={modifyTodolist}
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
  modifyTodolist: PropTypes.func,
  modelType: PropTypes.string,
};

Task.defaultProps = {
  switchAddTask: () => {},
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
  addTodolist: () => {},
  modifyTodolist: () => {},
  modelType: 'insert',
};

const mapDispatchToProps = dispatch => ({
  addTodolist: (list) => { dispatch(addTodolist(list)); },
  modifyTodolist: (list) => { dispatch(modifyTodolist(list)); },
});

export { Task as PureTask };

export default connect(null, mapDispatchToProps)(Task);
