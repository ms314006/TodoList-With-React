import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import Footer from '../../../../src/component/Task/Footer';

expect.extend({ toBeInTheDocument, });

const props = {
  data: {
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
  },
  modelType: 'insert',
  switchAddTask: jest.fn(),
  addTodolist: jest.fn(),
  modifyTodolist: jest.fn(),
};

describe('test <Task />', () => {
  afterEach(cleanup);

  test('確認是否正常 render ', () => {
    const { container, } = render(<Footer {...props} />);
    expect(container.querySelector('[class="task_footer"]')).toBeInTheDocument();

    // 兩個按鈕
    expect(container.querySelectorAll('button').length).toBe(2);
  });

  test('modelType 為 insert 時，點選儲存要執行 addTodolist', () => {
    const { container, } = render(<Footer {...props} />);
    fireEvent.click(container.querySelector('[class="save_button footer_button"]'));

    expect(props.addTodolist.mock.calls.length).toBe(1);

    // 存完關閉視窗
    expect(props.switchAddTask.mock.calls.length).toBe(1);
  });

  test('modelType 為 modify 時，點選儲存要執行 modifyTodolist', () => {
    props.modelType = 'modify';
    const { container, } = render(<Footer {...props} />);
    fireEvent.click(container.querySelector('[class="save_button footer_button"]'));

    expect(props.modifyTodolist.mock.calls.length).toBe(1);

    // 存完關閉視窗
    expect(props.switchAddTask.mock.calls.length).toBe(2);
  });

  test('點選返回要執行 switchAddTask', () => {
    const { container, } = render(<Footer {...props} />);
    fireEvent.click(container.querySelector('[class="cancel_button footer_button"]'));

    // 直接關閉視窗
    expect(props.switchAddTask.mock.calls.length).toBe(3);
  });
});
