import React, { useState } from 'react';
import { PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import './ListHead.scss';

const ListHead = (props) => {
  const { isInputShow, openInput } = props;
  return (
    <div className="header">
      <h1 className="header-label">事件待办</h1>
      {isInputShow ? (
        <CloseCircleOutlined style={{ fontSize: '22px' }} onClick={openInput} />
      ) : (
        <PlusCircleOutlined style={{ fontSize: '22px' }} onClick={openInput} />
      )}
    </div>
  );
};

export default ListHead;
