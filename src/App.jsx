import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, List } from 'antd';
import ListHead from './components/ListHead';
import ListInput from './components/ListInput';
import ListItem from './components/ListItem';
import ViewModal from './components/ViewModal';
import EditModal from './components/EditModal';
import { TODO_LIST } from './constants/index';
import './App.scss';

function App() {
  const [showInput, setShowInput] = useState(true); // 输入框
  const [modalVisible, setModalVisible] = useState(false); // 模态框
  const [modalEditVisible, setModalEditVisible] = useState(false); // 编辑模态框
  const [list, setList] = useState([]); // 待办列表
  const [itemData, setItemData] = useState({}); // 待办列表
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
  // 修改内容
  const updateItem = useCallback(({ content, completed, id }) => {
    const add = {
      id: new Date().getTime(),
      content,
      completed,
    };
    setList((list) => list.map((item) => (item.id === id ? add : item)));
    setModalEditVisible(false);
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

  // 打开选中待办
  const showModal = useCallback(
    (id) => {
      const item = list.find((item) => item.id === id);
      setItemData(item);
      setModalVisible(true);
    },
    [list]
  );

  // 编辑选中待办
  const editModal = useCallback(
    (id) => {
      const item = list.find((item) => item.id === id);
      setItemData(item);
      setModalEditVisible(true);
    },
    [list]
  );

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
                  <ListItem
                    data={item}
                    showModal={showModal}
                    editModal={editModal}
                  />
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col xs={0} sm={0} md={4} lg={6} xl={7}></Col>
      </Row>
      <ViewModal
        show={modalVisible}
        content={itemData}
        closeModal={() => setModalVisible(false)}
      />
      <EditModal
        show={modalEditVisible}
        content={itemData}
        closeModal={() => setModalEditVisible(false)}
        submitItem={updateItem}
      />
    </div>
  );
}

export default App;
