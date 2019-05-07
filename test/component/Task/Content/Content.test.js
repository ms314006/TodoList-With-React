import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import Content from '../../../../src/component/Task/Content';

expect.extend({ toBeInTheDocument, });

const props = {
  list:{
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
  changeData: jest.fn(),
};


describe('test <Content /> of <Task />', () => {
  afterEach(cleanup);

  test('changeData trigger when Comment change', () => {
    const { container, } = render(<Content {...props} />);
    fireEvent.change(container.querySelector('textarea'), { target: { value: '2', }, });
    expect(props.changeData.mock.calls.length).toBe(1);
  });

  test('changeData trigger when Time change', () => {
    const { container, } = render(<Content {...props} />);
    fireEvent.change(container.querySelector('input[type="time"]'), { target: { value: '2', }, });
    expect(props.changeData.mock.calls.length).toBe(2);
  });

  test('changeData trigger when date change', () => {
    const { container, } = render(<Content {...props} />);
    fireEvent.change(container.querySelector('input[type="date"]'), { target: { value: '2', }, });
    expect(props.changeData.mock.calls.length).toBe(3);
  });

  test('changeData trigger when file change', () => {
    const { container, } = render(<Content {...props} />);
    // 模擬檔案
    const blob = new Blob(['foo'], { type : 'text/plain', });
    fireEvent.change(container.querySelector('input[type="file"]'), { target: { files: [blob], }, });
    expect(props.changeData.mock.calls.length).toBe(4);
  });
});
