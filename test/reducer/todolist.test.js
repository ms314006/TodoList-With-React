import reducer from '../../src/reducer/todolist.js';
import * as actions from '../../src/actions/todolist.js';

const initialData = {
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

describe('test reducer', () => {
  test('確認是否正確回傳初始資料', () => {
    expect(reducer(undefined, {})).toEqual(initialData);
  });

  test('改變頁籤的類型', () => {
    const contentTypes = ['My Task', 'In Progress', 'Completed'];
    contentTypes.forEach((contentType) => {
      const expectObject = {
        contentType,
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
      expect(reducer(initialData, actions.changeContentType(contentType))).toEqual(expectObject);
    });
  });

  test('確認資料是否新增成功', () => {
    // 新增資料
    const newList = {
      onEdit: false,
      important: false,
      completed: false,
      title: '待辦事項二',
      deadlineDate: '2019-07-18',
      deadlineTime: '14:33',
      file: '流程圖.jpg',
      uploadFileTime: '2019-05-05',
      description: '一點都不輕鬆',
    };

    const expectObject = {
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
      }, {
        ...newList,
        id: 2,
      }],
    };
    expect(reducer(initialData, actions.addTodolist(newList))).toEqual(expectObject);
  });

  test('修改資料', () => {
    const newList = {
      id: 1,
      onEdit: false,
      important: false,
      completed: false,
      title: '待辦事項二',
      deadlineDate: '2019-07-18',
      deadlineTime: '14:33',
      file: '流程圖.jpg',
      uploadFileTime: '2019-05-05',
      description: '一點都不輕鬆',
    };

    const expectObject = {
      contentType: 'My Tasks',
      todolist: [{
        id: 1,
        onEdit: false,
        important: false,
        completed: false,
        title: '待辦事項二',
        deadlineDate: '2019-07-18',
        deadlineTime: '14:33',
        file: '流程圖.jpg',
        uploadFileTime: '2019-05-05',
        description: '一點都不輕鬆',
      }],
    };

    expect(reducer(initialData, actions.modifyTodolist(newList))).toEqual(expectObject);
  });

  test('改變 list 資料的狀態', () => {
    const todolistStatuss = ['onEdit', 'important', 'completed'];
    const expectObject = {
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
    todolistStatuss.forEach((todolistStatus) => {
      // 第一次點擊會變 true
      expectObject.todolist[0][todolistStatus] = true;
      expect(reducer(initialData, actions.changeTodolistStatus(1, todolistStatus))).toEqual(expectObject);

      // 點第二次會變回 false
      expectObject.todolist[0][todolistStatus] = false;
      expect(reducer(initialData, actions.changeTodolistStatus(1, todolistStatus))).toEqual(expectObject);
    });
  });

});
