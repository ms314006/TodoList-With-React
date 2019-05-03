import React from 'react';
import styles from './index.scss';

const AddInput = () => (
  <div className={styles.add_tasks_block}>
    <input
      type="button"
      className={styles.add_tasks_button}
      value=" ＋ Add Tasks"
    />
  </div>
);

export default AddInput;
