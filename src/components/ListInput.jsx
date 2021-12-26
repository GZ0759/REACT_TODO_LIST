import React, { useState } from 'react';
import { Input } from 'antd';

import './ListInput.scss';

const { Search } = Input;
const ListInput = (props) => {
  const { isInputShow, addItem } = props;
  const onSearch = (value) => {
    let inputValue = value.trim();
    if (!inputValue.length) return;
    addItem(inputValue);
  };
  return (
    <>
      {isInputShow && (
        <div className="input-wrap">
          <Search
            placeholder="请输入待办事项"
            onSearch={onSearch}
            enterButton="添加"
          />
        </div>
      )}
    </>
  );
};

export default ListInput;
