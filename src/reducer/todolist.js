import {
  CHANGE_CONTENT_TYPE,
  ADD_TODOLIST,
  MODIFY_TODOLIST,
  CHANGE_TODOLIST_STATUS
} from '../actions/todolist';

const initState = {
  contentType: 'My Tasks',
  todolist: [{
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
  }],
};

const todolist = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_CONTENT_TYPE:
      return {
        ...state,
        contentType: action.payload.contentType,
      };
    case ADD_TODOLIST: {
      const getNewId = (listData) => {
        let result = 2;
        for (let i = 1; i <= listData.length - 1; i += 1) {
          if (listData[i].id > listData[i - 1].id) {
            result = listData[i].id + 1;
          }
        }
        return result;
      };

      const newId = getNewId(state.todolist);

      const newTodolist = [...state.todolist];

      newTodolist.push({
        ...action.payload.list,
        id: newId,
      });

      return {
        ...state,
        todolist: newTodolist,
      };
    }
    case MODIFY_TODOLIST:
      return { ...state, };
    case CHANGE_TODOLIST_STATUS: {
      const targetListIndex = state.todolist.findIndex(list => (
        list.id === action.payload.id
      ));
      const newTodolist = [...state.todolist];

      const nowStatus = newTodolist[targetListIndex][action.payload.status];
      newTodolist[targetListIndex][action.payload.status] = !nowStatus;
      return {
        ...state,
        todolist: newTodolist,
      };
    }
    default:
      return state;
  }
};

export default todolist;
