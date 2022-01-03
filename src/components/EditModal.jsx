import React, { useEffect, useState } from 'react';
import { Modal, Button, Input, Switch } from 'antd';
import { timejs } from '../utils/index';
import './EditModal.scss';

const { TextArea } = Input;

const EditModal = (props) => {
  const { show, content, closeModal, submitItem } = props;
  const [inputValue, setInputValue] = useState('');
  const [swtichValue, setSwtichValue] = useState(false);

  useEffect(() => {
    const { content, completed } = props.content;
    setInputValue(content);
    setSwtichValue(completed);
  }, [props.content]);

  const onSubmit = () => {
    submitItem({ content: inputValue, completed: swtichValue, id: content.id });
  };
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
          <span>{timejs(content.id)}</span>
        </p>
        <p>
          <span className="area-label">内容：</span>
          <TextArea
            className="area"
            rows={4}
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
          ></TextArea>
        </p>
        <p>
          <span>状态：</span>
          <Switch
            checked={swtichValue}
            onChange={(e) => setSwtichValue(e)}
          />
        </p>
        <div className="btn">
          <Button type="primary" onClick={onSubmit}>
            提交
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default EditModal;
