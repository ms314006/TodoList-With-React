import * as actions from '../../src/actions/todolist';

const todolist = {
  id: 1,
  onEdit: false,
  important: false,
  completed: false,
  title: '打文章',
  deadlineDate: '2019-05-03',
  deadlineTime: '05:30',
  file: '文章列表.jpg',
  uploadFileTime: '2019-05-02',
  description: '輕鬆打一波',
};

describe('test actions', () => {

  test('test changeContentType', () => {
    expect(actions.CHANGE_CONTENT_TYPE).toBe('CHANGE_CONTENT_TYPE');

    const contentTypes = ['My Task', 'In Progress', 'Completed'];

    contentTypes.forEach((contentType) => {
      const expectAction = {
        type: actions.CHANGE_CONTENT_TYPE,
        payload: {
          contentType,
        },
      };
      expect(actions.changeContentType(contentType)).toEqual(expectAction);
    });
  });

  test('test add todolist', () => {
    expect(actions.ADD_TODOLIST).toBe('ADD_TODOLIST');

    const expectAction = {
      type: actions.ADD_TODOLIST,
      payload: {
        list: {
          ...todolist,
        },
      },
    };

    expect(actions.addTodolist(todolist)).toEqual(expectAction);
  });

  test('test modify todolist', () => {
    expect(actions.MODIFY_TODOLIST).toBe('MODIFY_TODOLIST');

    const expectAction = {
      type: actions.MODIFY_TODOLIST,
      payload: {
        list: {
          ...todolist,
        },
      },
    };

    expect(actions.modifyTodolist(todolist)).toEqual(expectAction);
  });

  test('test change todolist status', () => {
    expect(actions.CHANGE_TODOLIST_STATUS).toBe('CHANGE_TODOLIST_STATUS');

    const todolistStatuss = ['onEdit', 'important', 'completed'];

    todolistStatuss.forEach((todolistStatus) => {
      const expectAction = {
        type: actions.CHANGE_TODOLIST_STATUS,
        payload: {
          id: 1,
          status: todolistStatus,
        },
      };

      expect(actions.changeTodolistStatus(1, todolistStatus)).toEqual(expectAction);
    });
  });
});
