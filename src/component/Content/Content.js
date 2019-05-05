import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddInput from './AddInput';
import Todolist from '../Todolist';
import { changeTodolistStatus } from '../../actions/todolist';
import styles from './index.scss';

const Content = (props) => {
  const { todolist, changeTodolistStatus, } = props;
  const todolistFor = data => (
    data.map(list => (
      <Todolist
        key={list.id}
        list={list}
        changeTodolistStatus={changeTodolistStatus}
      />
    ))
  );

  return (
    <div className={styles.content}>
      <div className={styles.content_list}>
        <AddInput />
        { todolistFor(todolist) }
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
};

const mapStateToProps = state => ({
  todolist: state.todolist,
});


const mapDispatchToProps = dispatch => ({
  changeTodolistStatus: (id, status) => (dispatch(changeTodolistStatus(id, status))),
});


export default connect(mapStateToProps, mapDispatchToProps)(Content);
