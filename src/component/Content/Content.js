import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddInput from './AddInput';
import Todolist from '../Todolist';
import { changeTodolistStatus } from '../../actions/todolist';
import styles from './index.scss';

const Content = (props) => {
  const { todolist, changeTodolistStatus, contentType, } = props;

  const sortForImportant = (next, previous) => (
    next.important < previous.important ? 1 : -1
  );

  const sortFor = (data, type) => {
    // 先取得完成和未完成的
    const completeList = data.filter(list => (
      list.completed
    ));

    completeList.sort(sortForImportant);

    const inProgressList = data.filter(list => (
      !list.completed
    ));

    inProgressList.sort(sortForImportant);

    let result;
    switch (type) {
      case 'Completed':
        result = completeList;
        break;
      case 'In Progress':
        result = inProgressList;
        break;
      case 'My Tasks':
        result = [
          ...inProgressList,
          ...completeList
        ];
        break;
      default:
    }

    return result;
  };

  const todolistFor = (data) => {
    const newData = sortFor(data, contentType);
    return (
      newData.map(list => (
        <Todolist
          key={list.id}
          list={list}
          changeTodolistStatus={changeTodolistStatus}
        />
      ))
    );
  };

  const todolistCount = (data) => {
    let count = 0;
    data.forEach((list) => {
      if (!list.completed) {
        count += 1;
      }
    });

    return count;
  };

  return (
    <div className={styles.content}>
      <div className={styles.content_list}>
        <AddInput />
        { todolistFor(todolist) }
        <div className={styles.todolist_count}>
          { `${todolistCount(todolist)} tasks left`}
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  todolist: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    onEdit: PropTypes.bool,
    important: PropTypes.bool,
    completed: PropTypes.bool,
    title: PropTypes.string,
    deadlineDate: PropTypes.string,
    deadlineTime: PropTypes.string,
    file: PropTypes.string,
    description: PropTypes.string,
  })),
  changeTodolistStatus: PropTypes.func,
  contentType: PropTypes.string,
};

Content.defaultProps = {
  todolist: [{
    id: 0,
    onEdit: false,
    important: false,
    completed: false,
    title: '',
    deadlineDate: '',
    deadlineTime: '',
    file: '',
    description: '',
  }],
  changeTodolistStatus: () => { console.log('Content changeTodolistStatus'); },
  contentType: '',
};

const mapStateToProps = state => ({
  todolist: state.todolist,
  contentType: state.contentType,
});


const mapDispatchToProps = dispatch => ({
  changeTodolistStatus: (id, status) => (dispatch(changeTodolistStatus(id, status))),
});

export { Content as PureContent };

export default connect(mapStateToProps, mapDispatchToProps)(Content);
