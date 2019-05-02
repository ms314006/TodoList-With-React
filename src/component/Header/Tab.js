import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Tab = (props) => {
  const { contentType, text, changeContentType } = props;

  const classNameFor = (type) => {
    let result = styles.tab;
    if (type === text) result += ` ${styles.tab_select}`;
    return result;
  };

  return (
    <button
      type="button"
      className={classNameFor(contentType)}
      onClick={() => { changeContentType(text); }}
    >
      {text}
    </button>
  );
};

Tab.propTypes = {
  text: PropTypes.string,
  contentType: PropTypes.string,
  changeContentType: PropTypes.func,
};

Tab.defaultProps = {
  text: '',
  contentType: '',
  changeContentType: () => { console.log('changeContentType'); },
};

export default Tab;
