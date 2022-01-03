import React, { useState } from 'react';
import { Input } from 'antd';
import './ListInput.scss';
const { Search } = Input;

const ListInput = (props) => {
  const { isInputShow, addItem } = props;

  const [value, setValue] = useState('');
  const onSearch = (value) => {
    console.log(value);
    let inputValue = value.trim();
    if (!inputValue.length) return;
    addItem(inputValue);
    setValue('');
  };
  return (
    <>
      {isInputShow && (
        <div className="input-wrap">
          <Search
            placeholder="请输入待办事项"
            enterButton="添加"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            onSearch={onSearch}
          />
        </div>
      )}
    </>
  );
};

export default ListInput;
