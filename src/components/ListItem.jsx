import React, { useState } from 'react';
import { Switch, Button, Typography } from 'antd';

import './ListItem.scss';

const ListItem = (props) => {
  const { data } = props;
  return (
    <div className="item">
      <Switch
        className="item-switch"
        checkedChildren="完成"
        unCheckedChildren="未完成"
        defaultChecked={false}
      />
      <div className="item-content">
        <Typography.Text ellipsis mark>
          {data.content}
        </Typography.Text>
      </div>
      <div className="item-handles">
        <Button className='item-btn' type="primary" shape="round" size="small">
          查看
        </Button>
        <Button className='item-btn' type="primary" shape="round" size="small">
          编辑
        </Button>
        <Button className='item-btn' type="primary" danger shape="round" size="small">
          删除
        </Button>
      </div>
    </div>
  );
};

export default ListItem;
