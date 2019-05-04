import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Task from '../Task';


const Todolist = (props) => {
  const { list, } = props;
  return (
    <div>
      {list.onEdit ? <Task list={list} /> : <List list={list} />}
    </div>
  );
};

Todolist.propTypes = {
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

Todolist.defaultProps = {
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

export default Todolist;
