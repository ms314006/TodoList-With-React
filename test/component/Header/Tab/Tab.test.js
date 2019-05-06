import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import Tab from '../../../../src/component/Header/Tab';

expect.extend({ toBeInTheDocument, });

const props = {
  contentType :'My Tasks',
  text : 'My Tasks',
  changeContentType: jest.fn(),
};

const getTabButton = container => (container.querySelector('button'));

describe('test <Tab />', () => {
  afterEach(cleanup);

  test('確認是否有被 render ', () => {
    const { container, } = render(<Tab {...props} />);
    // 確認是否有 render
    expect(getTabButton(container)).toBeInTheDocument();
  });

  test('確認 contentType 與 text 不同時， class 只會有 tab', () => {
    props.contentType = 'My Tasks';
    props.text = 'Completed';
    const { container, } = render(<Tab {...props} />);
    expect(getTabButton(container).className).toBe('tab');
  });

  test('確認 contentType 與 text 相同時， class 會多一個 tab_select', () => {
    props.contentType = 'My Tasks';
    props.text = 'My Tasks';
    const { container, } = render(<Tab {...props} />);
    expect(getTabButton(container).className).toBe('tab tab_select');
  });

  test('點擊按鈕確認是否有觸發 changeContentType', () => {
    const { container, } = render(<Tab {...props} />);
    // 點擊
    fireEvent.click(getTabButton(container));
    // 確認有執行
    expect(props.changeContentType.mock.calls.length).toBe(1);
  });
});
