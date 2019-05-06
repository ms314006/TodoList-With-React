import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Main from '../../../src/component/Main';

expect.extend({ toBeInTheDocument, });

const mockStore = configureMockStore();
const store = mockStore({});

describe('test <Main />', () => {
  afterEach(cleanup);

  test('確認是否正常 render', () => {
    const { container, } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    expect(container.querySelector('[class="main"]')).toBeInTheDocument();
    expect(container.querySelector('[class="header"]')).toBeInTheDocument();
    expect(container.querySelector('[class="content"]')).toBeInTheDocument();
  });
});
