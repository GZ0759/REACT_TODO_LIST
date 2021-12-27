import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, List } from 'antd';
import ListHead from './components/ListHead';
import ListInput from './components/ListInput';
import ListItem from './components/ListItem';
import { TODO_LIST } from './constants/index';
import './App.scss';

function App() {
  const [showInput, setShowInput] = useState(true);
  const [list, setList] = useState([]);
  // 打开输入框
  const openInput = () => {
    setShowInput(!showInput);
  };
  // 添加新增内容
  const addItem = useCallback((value) => {
    const item = {
      id: new Date().getTime(),
      content: value,
      completed: false,
    };
    setList((list) => [...list, item]);
    setShowInput(false);
  }, []);

  // 获取数据
  useEffect(() => {
    let todoList = JSON.parse(localStorage.getItem(TODO_LIST)) || [];
    setList(todoList);
  }, []);

  // 更新数据
  useEffect(() => {
    localStorage.setItem(TODO_LIST, JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
      <Row>
        <Col xs={0} sm={0} md={4} lg={6} xl={7}></Col>
        <Col xs={24} sm={24} md={16} lg={12} xl={10}>
          <ListHead isInputShow={showInput} openInput={openInput}></ListHead>
          <ListInput isInputShow={showInput} addItem={addItem}></ListInput>
          <div className="content">
            <List
              dataSource={list}
              locale={{ emptyText: '这里是空空如也' }}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <ListItem data={item} />
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col xs={0} sm={0} md={4} lg={6} xl={7}></Col>
      </Row>
    </div>
  );
}

export default App;
