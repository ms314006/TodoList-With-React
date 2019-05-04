import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Content = () => {
  return (
    <div className={styles.task_content_block}>
      <div className={styles.flex_row}>
        <div className={styles.flex_col_icon}>
          <i className="far fa-calendar-alt" />
        </div>
        <div className={styles.flex_col_content}>
          <span>Deadline</span>
        </div>
      </div>
      <div className={styles.flex_row}>
        <div className={styles.flex_col_icon}>&nbsp;</div>
        <div className={styles.flex_col_content}>
          <input
            className={styles.input_task_data}
            type="date"
          />
          &nbsp;
          <input
            className={styles.input_task_data}
            type="time"
          />
        </div>
      </div>
      <div className={styles.flex_row}>
        <div className={styles.flex_col_icon}>
          <i className="far fa-file" />
        </div>
        <div className={styles.flex_col_content}>
          <span>File</span>
        </div>
      </div>
      <div className={styles.flex_row}>
        <div className={styles.flex_col_icon}>&nbsp;</div>
        <div className={styles.flex_col_content}>
          <i className={`fas fa-plus-square ${styles.add_file_icon}`} />
        </div>
      </div>
      <div className={styles.flex_row}>
        <div className={styles.flex_col_icon}>
          <i className="far fa-comment-dots" />
        </div>
        <div className={styles.flex_col_content}>
          <span>Comment</span>
        </div>
      </div>
      <div className={styles.flex_row}>
        <div className={styles.flex_col_icon}>&nbsp;</div>
        <div className={styles.flex_col_content}>
          <textarea
            cols="50"
            rows="5"
            placeholder="輸入你想要寫的內容..."
            className={styles.input_task_data}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
