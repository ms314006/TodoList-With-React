import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Footer = (props) => {
  const {
    data,
    modelType,
    switchAddTask,
    addTodolist,
    modifyTodolist,
  } = props;

  const handleTodolist = (type) => {
    switch (type) {
      case 'insert':
        addTodolist(data);
        break;
      case 'modify':
        modifyTodolist(data);
        break;
      default:
    }
    switchAddTask();
  };

  return (
    <div className={styles.task_footer}>
      <button
        type="button"
        className={`${styles.cancel_button} ${styles.footer_button}`}
        onClick={() => { switchAddTask(); }}
      >
        Ｘ Cancel
      </button>
      <button
        type="button"
        className={`${styles.save_button} ${styles.footer_button}`}
        onClick={() => { handleTodolist(modelType); }}
      >
        ＋ Add Tasks
      </button>
    </div>
  );
};


Footer.propTypes = {
  modelType: PropTypes.string,
  data: PropTypes.shape({
    id: PropTypes.number,
    onEdit: PropTypes.bool,
    important: PropTypes.bool,
    completed: PropTypes.bool,
    title: PropTypes.string,
    deadlineDate: PropTypes.string,
    deadlineTime: PropTypes.string,
    file: PropTypes.string,
    uploadFileTime: PropTypes.string,
    description: PropTypes.string,
  }),
  switchAddTask: PropTypes.func,
  addTodolist: PropTypes.func,
  modifyTodolist: PropTypes.func,
};

Footer.defaultProps = {
  modelType: '',
  data: {
    id: 0,
    onEdit: false,
    important: false,
    completed: false,
    title: '',
    deadlineDate: '',
    deadlineTime: '',
    file: '',
    uploadFileTime: '',
    description: '',
  },
  switchAddTask: () => {},
  addTodolist: () => {},
  modifyTodolist: () => {},
};

export default Footer;
