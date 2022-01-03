import React from 'react';
import { Modal, Button, Input, Switch } from 'antd';
import './EditModal.scss';

const { TextArea } = Input;

const EditModal = (props) => {
  const { show, content, closeModal } = props;

  const onChange = () => {};

  return (
    <>
      <Modal
        title="查看待办"
        visible={show}
        footer={null}
        onCancel={closeModal}
      >
        <p>
          <span>时间：</span>
          <span>{content.id}</span>
        </p>
        <p>
          <span className='area-label'>内容：</span>
          <TextArea className="area" rows={4} value={content.content}></TextArea>
          {/* <span>{content.content}</span> */}
        </p>
        <p>
          <span>状态：</span>
          <Switch defaultChecked={content.completed} onChange={onChange} />
          {/* <span>{content.completed ? '完成' : '未完成'}</span> */}
        </p>
        <div className="btn">
          <Button type="primary" onClick={closeModal}>
            提交
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default EditModal;
