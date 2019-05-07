import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Task/Header';

const List = (props) => {
  const { list, changeTodolistStatus, } = props;

  return (
    <div
      data-testid="listBlock"
      onClick={() => { changeTodolistStatus(list.id, 'onEdit'); }}
      onKeyPress={() => {}}
    >
      <Header
        type="display"
        list={list}
        changeTodolistStatus={changeTodolistStatus}
      />
    </div>
  );
};

List.propTypes = {
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
  changeTodolistStatus: PropTypes.func,
};

List.defaultProps = {
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
  changeTodolistStatus: () => {},
};
export default List;
