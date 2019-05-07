import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import Header from '../../../../src/component/Task/Header';

expect.extend({ toBeInTheDocument, });

const props = {
  type: 'display',
  detailDataRow: <div />,
  list:{
    id: 1,
    onEdit: false,
    important: false,
    completed: false,
    title: '事項',
    deadlineDate: '2019-05-03',
    deadlineTime: '05:30',
    file: '文章列表.jpg',
    uploadFileTime: '2019-05-02',
    description: '輕鬆打一波',
  },
  changeData: jest.fn(),
};


describe('test <Header /> of <Task />', () => {
  afterEach(cleanup);

  test('確認事項不重要時的 render ', () => {
    const { container, } = render(<Header {...props} />);
    // 整個區塊
    expect(container.querySelector('[class="task_header"]')).toBeInTheDocument();
    // 事項標題
    expect(container.querySelector('[class="task_title   "]')).toBeInTheDocument();
    // 星星
    expect(container.querySelector('[class="far fa-star"]')).toBeInTheDocument();
  });

  test('確認重要事項時的 render ', () => {
    props.list.important = true;
    const { container, } = render(<Header {...props} />);
    // 整個區塊
    expect(container.querySelector('[class="important_task_header"]')).toBeInTheDocument();
    // 事項標題
    expect(container.querySelector('[class="task_title  important_task_header "]')).toBeInTheDocument();
    // 星星
    expect(container.querySelector('[class="fas fa-star check_important"]')).toBeInTheDocument();
  });

  test('確認未完成事項時的 render ', () => {
    const { container, } = render(<Header {...props} />);
    // 事項標題
    expect(container.querySelector('[class="task_title  important_task_header "]')).toBeInTheDocument();
  });

  test('確認完成事項時的 render ', () => {
    props.list.completed = true;
    const { container, } = render(<Header {...props} />);
    // 事項標題
    expect(container.querySelector('[class="task_title completed_task_title important_task_header "]')).toBeInTheDocument();
  });

  test('確認 Header 在 type 為 display 時的 render ', () => {
    const { container, } = render(<Header {...props} />);
    expect(container.querySelector('[class="display_main_data"]')).toBeInTheDocument();
  });

  test('確認 Header 的 type 不為 display 時的 render ', () => {
    props.type = '';
    const { container, } = render(<Header {...props} />);
    expect(container.querySelector('[class="main_data"]')).toBeInTheDocument();
  });

  test('確認標記完成時是否會執行 changeTodolistStatus ', () => {
    const { container, } = render(<Header {...props} />);
    fireEvent.click(container.querySelector('[class="complete_check_block"]'));
    expect(props.changeData.mock.calls.length).toBe(1);
  });

  test('確認標記重要時是否會執行 changeTodolistStatus ', () => {
    const { getByTestId, } = render(<Header {...props} />);
    fireEvent.click(getByTestId('import_block'));
    expect(props.changeData.mock.calls.length).toBe(2);
  });

  test('type 不等於 display 的編輯模式，修改事項名稱要能觸發 changeData', () => {
    props.type = '';
    const { container, } = render(<Header {...props} />);
    fireEvent.change(container.querySelector('input'), { target: { value: '2', }, });
    expect(props.changeData.mock.calls.length).toBe(3);
  });
});
