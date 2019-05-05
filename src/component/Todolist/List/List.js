import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Task/Header';
import styles from './index.scss';

const List = (props) => {
  const { list, } = props;

  const getDetailDataRowFor = (detailData) => {
    const { deadlineDate, file, description, } = detailData;
    const dataIconFor = (type) => {
      switch (type) {
        case 'date':
          return (
            <>
              <i className={`far fa-calendar-alt ${styles.detail_data_gap}`} />
              <span className={styles.detail_data_gap}>
                {deadlineDate.slice(5).replace('-', '/')}
              </span>
            </>
          );
        case 'file':
          return <i className={`far fa-file ${styles.detail_data_gap}`} />;
        case 'description':
          return <i className={`far fa-comment-dots ${styles.detail_data_gap}`} />;
        default:
          return null;
      }
    };
    return (
      <div className={styles.detail_data_row}>
        { deadlineDate === '' ? null : dataIconFor('date') }
        { file === '' ? null : dataIconFor('file') }
        { description === '' ? null : dataIconFor('description') }
      </div>
    );
  };

  return (
    <div>
      <Header
        type="display"
        list={list}
        detailDataRow={
          (
            getDetailDataRowFor({
              deadlineDate: list.deadlineDate,
              file: list.file,
              description: list.description,
            })
          )
        }
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
};

export default List;
