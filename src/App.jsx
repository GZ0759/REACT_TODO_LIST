import React, { useState, useCallback } from 'react';
import './App.scss';
import { List } from 'antd';
import ListHead from './components/ListHead';
import ListInput from './components/ListInput';
import ListItem from './components/ListItem';

function App() {
  const [showInput, setShowInput] = useState(false);
  const [list, setList] = useState([]);
  const openInput = () => {
    setShowInput(!showInput);
  };
  const addItem = useCallback((value) => {
    const item = {
      id: new Date().getTime(),
      content: value,
      completed: false,
    };
    setList((list) => [...list, item]);
    setShowInput(false);
  }, []);
  return (
    <div className="App">
      <ListHead openInput={openInput}></ListHead>
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
    </div>
  );
}

export default App;
