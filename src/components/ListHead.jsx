import React, { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import './ListHead.scss';

const ListHead = (props) => {
  const { openInput } = props;
  return (
    <div className="header">
      <h1 className="header-label">事件待办</h1>
      <PlusCircleOutlined style={{ fontSize: '22px' }} onClick={openInput} />
    </div>
  );
};

export default ListHead;
