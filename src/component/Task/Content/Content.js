import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Content = (props) => {
  const { list, changeData, } = props;
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
        <div className={styles.flex_col_icon} />
        <div className={styles.flex_col_content}>
          <input
            type="date"
            value={list.deadlineDate}
            className={styles.input_task_data}
            onChange={(event) => {
              changeData({
                ...list,
                deadlineDate: event.target.value,
              });
            }}
          />
          &nbsp;
          <input
            type="time"
            value={list.deadlineTime}
            className={styles.input_task_data}
            onChange={(event) => {
              changeData({
                ...list,
                deadlineTime: event.target.value,
              });
            }}
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
        <div className={styles.flex_col_icon} />
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
        <div className={styles.flex_col_icon} />
        <div className={styles.flex_col_content}>
          <textarea
            cols="50"
            rows="5"
            value={list.description}
            placeholder="輸入你想要寫的內容..."
            className={styles.input_task_data}
            onChange={(event) => {
              changeData({
                ...list,
                description: event.target.value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
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
  changeData: PropTypes.func,
};

Content.defaultProps = {
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
  changeData: () => { console.log('Header changeData'); },
};

export default Content;
