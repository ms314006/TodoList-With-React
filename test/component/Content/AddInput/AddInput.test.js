import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@babel/polyfill';
import AddInput from '../../../../src/component/Content/AddInput';

expect.extend({ toBeInTheDocument, });

const mockStore = configureMockStore();
const store = mockStore({});

describe('test <AddInput />', () => {
  afterEach(cleanup);
  test('確認點擊 Add Task 後，會正常切換到新增畫面', async () => {
    // 因為 react-testing-library 只有 mount render 所以傳 mock store
    const { container, } = render(
      <Provider store={store}>
        <AddInput />
      </Provider>
    );

    // 取得開啟新增按鈕
    const getAddTasksButton = () => (container.querySelector('[class="add_tasks_button"]'));

    // 新增 list 的表單
    const getAddListForm = () => (container.querySelector('[class="task_block"]'));

    // 確認新增畫面沒 render
    expect(getAddListForm()).not.toBeInTheDocument();
    // 確認 addTasks 按鈕存在
    expect(getAddTasksButton()).toBeInTheDocument();
    // 點他
    fireEvent.click(getAddTasksButton());
    // 應該不見了
    expect(getAddTasksButton()).not.toBeInTheDocument();
    // 換成新增畫面出現了
    expect(getAddListForm()).toBeInTheDocument();
  });
});
