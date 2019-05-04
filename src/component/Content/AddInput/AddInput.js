import React, { useState } from 'react';
import Task from '../../Task';
import styles from './index.scss';

const AddInput = () => {
  const [openAddTask, changeOpenAddTask] = useState(false);
  const switchAddTask = () => {
    changeOpenAddTask(!openAddTask);
  };

  return (
    <div className={styles.add_tasks_block}>
      {openAddTask ? null
        : (
          <button
            type="button"
            className={styles.add_tasks_button}
            onClick={() => { switchAddTask(); }}
          >
          ＋ Add Tasks
          </button>
        )
      }
      {openAddTask ? <Task switchAddTask={switchAddTask} /> : null}
    </div>
  );
};

export default AddInput;
