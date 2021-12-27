import React, { useState } from 'react';
import { Modal } from 'antd';
import './ViewModal.scss';

const ViewModal = (props) => {
  const { show, content, closeModal } = props;

  return (
    <>
      <Modal
        title="查看待办事项"
        visible={show}
        onOk={closeModal}
        onCancel={closeModal}
      >
        <p>
          <span>时间：</span>
          <span>{content.id}</span>
        </p>
        <p>
          <span>内容：</span>
          <span>{content.content}</span>
        </p>
        <p>
          <span>状态：</span>
          <span>{content.completed ? '完成' : '未完成'}</span>
        </p>
      </Modal>
    </>
  );
};

export default ViewModal;
