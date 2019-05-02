import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todolist from '../Todolist';
import styles from './index.scss';

const Content = (props) => {
  const { todolist, } = props;
  const todolistDOM = todolist.map(list => (
    <Todolist key={list.key} list={list} />
  ));
  return (
    <div className={styles.content}>
      { todolistDOM }
    </div>
  );
};

Content.propTypes = {
  todolist: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number,
    import: PropTypes.bool,
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
    key: 0,
    import: false,
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

export default connect(mapStateToProps)(Content);
