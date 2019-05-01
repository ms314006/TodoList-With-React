import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import styles from './index.scss';

const Tab = (props) => {
  const { to, text, } = props;

  const classNameFor = (pathname) => {
    let result = styles.tab;
    if (to === pathname) result += ` ${styles.tab_select}`;
    return result;
  };

  return (
    <Route>
      {
        ({ location, }) => {
          const className = classNameFor(location.pathname);
          return (
            <Link to={to}>
              <button type="button" className={className}>
                {text}
              </button>
            </Link>
          );
        }
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
