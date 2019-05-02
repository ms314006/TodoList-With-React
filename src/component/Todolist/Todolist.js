import React from 'react';
import PropTypes from 'prop-types';

const Todolist = (props) => {
  const { list, } = props;
  return <h1>{list.title}</h1>;
};

Todolist.propTypes = {
  list: PropTypes.shape({
    key: PropTypes.number,
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
    key: 0,
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
