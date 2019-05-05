import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Header = (props) => {
  const {
    type,
    list,
    detailDataRow,
    changeData,
    changeTodolistStatus,
  } = props;

  const getTitleStyles = (completed, important) => {
    let result = '';
    result += `${completed ? styles.completed_task_title : ''} `;
    result += `${important ? styles.import_task_header : ''} `;
    return result;
  };
  return (
    <div className={list.import ? styles.import_task_header : styles.task_header}>
      <div className={type === 'display' ? styles.display_main_data : styles.main_data}>
        <div
          className={styles.complete_check_block}
          onClick={() => { changeTodolistStatus('completed'); }}
          onKeyPress={() => { console.log('complete'); }}
        >
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
                className={`${styles.task_title} ${getTitleStyles(list.completed, list.import)}`}
              >
                {list.title}
              </span>
            )
            : (
              <input
                type="text"
                value={list.title}
                className={`${styles.task_title} ${getTitleStyles(list.completed, list.import)}`}
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
        <div
          onClick={() => { changeTodolistStatus('import'); }}
          onKeyPress={() => { console.log('import'); }}
        >
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
  changeTodolistStatus: PropTypes.func,
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
  changeTodolistStatus: () => { console.log('Header changeTodolistStatus'); },
};

export default Header;
