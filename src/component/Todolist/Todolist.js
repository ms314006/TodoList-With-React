import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

const Todolist = (props) => {
  const { list, } = props;
  return (
    <div>
      <List list={list} />
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
