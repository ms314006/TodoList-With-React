import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import List from '../../../../src/component/Todolist/List';

expect.extend({ toBeInTheDocument, });

const props = {
  list: {
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
  changeTodolistStatus: jest.fn(),
};

describe('test <Task />', () => {
  afterEach(cleanup);

  test('確認是否正常 render ', () => {
    const { getByTestId, } = render(<List {...props} />);
    expect(getByTestId('listBlock')).toBeInTheDocument();
  });

  test('點擊是否會執行 changeTodolistStatus', () => {
    const { getByTestId, } = render(<List {...props} />);
    fireEvent.click(getByTestId('listBlock'));

    // 執行一次
    expect(props.changeTodolistStatus.mock.calls.length).toBe(1);
  });
});
