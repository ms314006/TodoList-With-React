import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Header = (props) => {
  const {
    type,
    list,
    detailDataRow,
    changeData,
  } = props;
  return (
    <div className={list.import ? styles.import_task_header : styles.task_header}>
      <div className={type === 'display' ? styles.display_main_data : styles.main_data}>
        <div className={styles.complete_check_block}>
          {
            list.completed
              ? <i className={`fas fa-check-square ${styles.check_completed}`} />
              : <i className="far fa-square" />
          }
        </div>
        <div className={styles.title_block}>
          {type === 'display'
            ? (
              <span
                className={`${styles.task_title} ${
                  list.completed ? styles.completed_task_title : ''
                } ${
                  list.import ? styles.import_task_header : ''
                }`}
              >
                {list.title}
              </span>
            )
            : (
              <input
                type="text"
                value={list.title}
                className={`${styles.task_title} ${
                  list.import ? styles.import_task_header : ''
                }`}
                placeholder="Type Something Here…"
                onChange={(event) => {
                  changeData({
                    ...list,
                    title: event.target.value,
                  });
                }}
              />
            )
          }
        </div>
        <div>
          {
            list.import
              ? <i className={`fas fa-star ${list.import ? styles.check_import : ''}`} />
              : <i className="far fa-star" />
          }
        </div>
        <div>
          <i className={`fas fa-pen ${type === 'display' ? '' : styles.edit_tasks_icon}`} />
        </div>
      </div>
      {detailDataRow || null}
    </div>
  );
};

Header.propTypes = {
  type: PropTypes.string,
  list: PropTypes.shape({
    id: PropTypes.number,
    onEdit: PropTypes.bool,
    import: PropTypes.bool,
    completed: PropTypes.bool,
    title: PropTypes.string,
    deadlineDate: PropTypes.string,
    deadlineTime: PropTypes.string,
    file: PropTypes.string,
    uploadFileTime: PropTypes.string,
    description: PropTypes.string,
  }),
  detailDataRow: PropTypes.shape(),
  changeData: PropTypes.func,
};

Header.defaultProps = {
  type: '',
  list: {
    id: 0,
    onEdit: false,
    import: false,
    completed: false,
    title: '',
    deadlineDate: '',
    deadlineTime: '',
    file: '',
    uploadFileTime: '',
    description: '',
  },
  detailDataRow: <></>,
  changeData: () => { console.log('Header changeData'); },
};

export default Header;
