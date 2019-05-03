import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tab from './Tab';
import { changeContentType } from '../../actions/todolist';
import styles from './index.scss';

const Header = (props) => {
  const tabList = ['My Tasks', 'In Progress', 'Completed'];
  return (
    <div className={styles.header}>
      {
        tabList.map(tab => (
          <Tab
            key={tab}
            text={tab}
            contentType={props.contentType}
            changeContentType={props.changeContentType}
          />
        ))
      }
    </div>
  );
};

Header.propTypes = {
  changeContentType: PropTypes.func,
  contentType: PropTypes.string,
};

Header.defaultProps = {
  changeContentType: () => { console.log('changeContentType'); },
  contentType: '',
};

const mapStateToProps = state => ({
  contentType: state.contentType,
});

const mapDispatchToProps = dispatch => ({
  changeContentType: (contentType) => {
    dispatch(changeContentType(contentType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
