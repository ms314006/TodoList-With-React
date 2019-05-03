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
    import: false,
    completed: false,
    title: '打文章',
    deadlineDate: '2019-05-03',
    deadlineTime: '05:30',
    file: '文章列表.jpg',
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
    case ADD_TODOLIST:
      return { ...state, };
    case MODIFY_TODOLIST:
      return { ...state, };
    case CHANGE_TODOLIST_STATUS:
      return { ...state, };
    default:
      return state;
  }
};

export default todolist;
