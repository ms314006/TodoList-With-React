import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Header = () => {
  return (
    <div className={styles.task_header}>
      <div className={styles.complete_check_block}>
        <i className="far fa-square" />
        {/*<i className={`fas fa-check-square ${styles.check_completed}`} />*/}
      </div>
      <div>
        <input
          type="text"
          className={styles.input_task_name}
          placeholder="Type Something Here…"
        />
      </div>
      <div>
        <i className="far fa-star" />
        {/*<i className={`fas fa-star ${styles.check_import}`} />*/}
      </div>
      <div>
        <i className={`fas fa-pen ${styles.edit_tasks_icon}`} />
      </div>
    </div>
  );
};

export default Header;
