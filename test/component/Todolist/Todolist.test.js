import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Todolist from '../../../src/component/Todolist';

expect.extend({ toBeInTheDocument, });

const mockStore = configureMockStore();
const store = mockStore({});

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
};

describe('test <Task />', () => {
  afterEach(cleanup);

  test('確認是否正常 render ', () => {
    const { container, } = render(<Todolist {...props} />);
    expect(container.querySelector('[class="list_block"]')).toBeInTheDocument();
  });

  test('確認 onEdit 為 false 時 render 是否正確', () => {
    const { getByTestId, } = render(<Todolist {...props} />);

    // render 一般 list
    expect(getByTestId('listBlock')).toBeInTheDocument();
  });

  test('確認 onEdit 為 true 時 render 是否正確', () => {
    props.list.onEdit = true;
    // Task 需要 store
    const { container, } = render(
      <Provider store={store}>
        <Todolist {...props} />
      </Provider>
    );
    // render Task Component 編輯
    expect(container.querySelector('[class="task_block"]')).toBeInTheDocument();
  });
});
