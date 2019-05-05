import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Footer = (props) => {
  const { switchAddTask, handleTodolist, } = props;
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
        onClick={() => { handleTodolist(); }}
      >
        ＋ Add Tasks
      </button>
    </div>
  );
};


Footer.propTypes = {
  switchAddTask: PropTypes.func,
  handleTodolist: PropTypes.func,
};

Footer.defaultProps = {
  switchAddTask: () => { console.log('Footer switchAddTask'); },
  handleTodolist: () => { console.log('Footer handleTodolist'); },
};

export default Footer;
