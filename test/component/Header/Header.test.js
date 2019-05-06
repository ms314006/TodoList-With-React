import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { PureHeader as Header } from '../../../src/component/Header';

expect.extend({ toBeInTheDocument, });

const mockStore = configureMockStore();
const store = mockStore({});

const props = {
  changeContentType: jest.fn(),
  contentType: 'My Tasks',
};

describe('test <Header />', () => {
  afterEach(cleanup);

  test('確認是否正常 render ', () => {
    const { container, } = render(
      <Provider store={store}>
        <Header {...props} />
      </Provider>
    );
    expect(container.querySelector('[class="header"]')).toBeInTheDocument();

    // 有三個 tab
    expect(container.querySelectorAll('button').length).toBe(3);
  });
});
