export const CHANGE_CONTENT_TYPE = 'CHANGE_CONTENT_TYPE';

export const changeContentType = contentType => ({
  type: CHANGE_CONTENT_TYPE,
  payload: {
    contentType,
  },
});

export const ADD_TODOLIST = 'ADD_TODOLIST';

export const addTodolist = todolist => ({
  type: ADD_TODOLIST,
  payload: {
    list: {
      ...todolist,
    },
  },
});

export const MODIFY_TODOLIST = 'MODIFY_TODOLIST';

export const modifyTodolist = todolist => ({
  type: MODIFY_TODOLIST,
  payload: {
    list: {
      ...todolist,
    },
  },
});

export const CHANGE_TODOLIST_STATUS = 'CHANGE_TODOLIST_STATUS';

export const changeTodolistStatus = (id, status) => ({
  type: CHANGE_TODOLIST_STATUS,
  payload: {
    id,
    status,
  },
});
