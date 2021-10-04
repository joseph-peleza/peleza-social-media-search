import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import logo from './Assets/peleza_logo_white.png';
import SearchDetails from './SearchDetails';

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <img src={logo} className="logo"  alt="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            FaceBook Search
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Instagram Search
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            LinkedIn Search
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => toggle()
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
          }}
        >
          <h1 style={{fontSize: "30px" }}>Welcome, To Peleza Social Media Search Tool:</h1>
          <br/>
          <SearchDetails/>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
