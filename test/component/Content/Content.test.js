import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import '@babel/polyfill';
import { PureContent as Content } from '../../../src/component/Content';

expect.extend({ toBeInTheDocument, });

const testData = [{
  id: 1,
  onEdit: false,
  important: false,
  completed: true,
  title: '完成事項',
  deadlineDate: '2019-05-03',
  deadlineTime: '05:30',
  file: '文章列表.jpg',
  uploadFileTime: '2019-05-02',
  description: '輕鬆打一波',
}, {
  id: 2,
  onEdit: false,
  important: true,
  completed: false,
  title: '重要事項',
  deadlineDate: '2019-05-03',
  deadlineTime: '05:30',
  file: '文章列表.jpg',
  uploadFileTime: '2019-05-02',
  description: '輕鬆打一波',
}, {
  id: 3,
  onEdit: false,
  important: false,
  completed: false,
  title: '未完成事項',
  deadlineDate: '2019-05-03',
  deadlineTime: '05:30',
  file: '文章列表.jpg',
  uploadFileTime: '2019-05-02',
  description: '輕鬆打一波',
}];

const props = {
  todolist: testData,
  changeTodolistStatus: jest.fn(),
  contentType: 'My Tasks',
};

const getListBlockCount = container => (container.querySelectorAll('[class="list_block"]').length);

const getAllListTitle = container => (container.querySelectorAll('[class="title_block"]'));

describe('test <Content />', () => {
  afterEach(cleanup);

  test('確認 AddInput 是否有被 render ', () => {
    /* 直接取沒 connect 過的，所以不需要 mock store
       如果取 connect 過的， props 會優先抓取 store 的，但此時我們需要 mock 的 */
    const { container, } = render(<Content {...props} />);
    expect(container.querySelector('[class="add_tasks_block"]')).toBeInTheDocument();
  });

  test('確認未完成事項的數量', () => {
    const { container, } = render(<Content {...props} />);
    expect(container.querySelector('[class="todolist_count"]').innerHTML).toBe('2 tasks left');
  });

  test('確認 contentType 為 My Tasks 時，listBlock 的 render 數', () => {
    const { container, } = render(<Content {...props} />);
    // listBlock 應該要被 render 出兩個，因為有兩個 list
    expect(getListBlockCount(container)).toBe(3);
  });

  test('確認 important 有沒有置頂', () => {
    const { container, } = render(<Content {...props} />);

    // 第一項是否為「重要事項」
    expect(container.querySelectorAll('[class="title_block"]')[0].firstChild.innerHTML).toBe('重要事項');
  });

  test('確認 completed 有沒有在最下面', () => {
    const { container, } = render(<Content {...props} />);

    // 最後一項是否為「完成事項」
    expect(getAllListTitle(container)[getAllListTitle(container).length - 1].firstChild.innerHTML).toBe('完成事項');
  });

  test('確認 contentType 為 In Progress 時，listBlock 的 render 數', () => {
    props.contentType = 'In Progress';
    const { container, } = render(<Content {...props} />);
    expect(getListBlockCount(container)).toBe(2);
  });

  test('確認 contentType 為 Completed 時，listBlock 的 render 數', () => {
    props.contentType = 'Completed';
    const { container, } = render(<Content {...props} />);
    expect(getListBlockCount(container)).toBe(1);
  });

  test('確認 contentType 為 My Tasks ，但 todolist 的資料數為 0 時，listBlock 的 render 數', () => {
    props.todolist = [];
    props.contentType = 'My Tasks';
    const { container, } = render(<Content {...props} />);
    expect(getListBlockCount(container)).toBe(0);
  });
});
