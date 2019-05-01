import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import styles from './index.scss';

const Tab = (props) => {
  const { to, text, } = props;
  return (
    <Route>
      {
        <Link to={to}>
          <button type="button" className={styles.tab}>
            {text}
          </button>
        </Link>
      }
    </Route>
  );
};

Tab.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};

Tab.defaultProps = {
  to: '/',
  text: '',
};

export default Tab;
