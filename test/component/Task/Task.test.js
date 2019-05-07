import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { PureTask as Task } from '../../../src/component/Task';

expect.extend({ toBeInTheDocument, });

const mockStore = configureMockStore();
const store = mockStore({});

describe('test <Task />', () => {
  afterEach(cleanup);

  test('確認是否正常 render ', () => {
    const { container, } = render(
      <Provider store={store}>
        <Task />
      </Provider>
    );

    expect(container.querySelector('[class="task_content_block"]')).toBeInTheDocument();
    expect(container.querySelector('[class="task_footer"]')).toBeInTheDocument();
    expect(container.querySelector('[class="task_header"]')).toBeInTheDocument();
  });
});
