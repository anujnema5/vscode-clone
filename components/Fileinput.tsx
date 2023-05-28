import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import React from 'react';

const App: React.FC = () => (   
    <Space.Compact style={{ width: '100%' }}>
      <Input defaultValue="" placeholder='Enter file name'/>
      <Button type="primary" className='bg-blue-500 hover:bg-blue-600 flex items-center justify-center w-20'><CheckOutlined /></Button>
    </Space.Compact>
);

export default App;