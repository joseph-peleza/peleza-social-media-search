import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import logo from '../Assets/peleza_logo_white.png';
import UploadCandidateimage from '../components/UploadCandidateImage';


const { Header, Sider, Content } = Layout;

function InternetSearchPage() {
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
            Social Media Search
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Google Image Search
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Reports
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
          <h1 style={{fontSize: "30px" }}>Peleza Internet Image Search Tool:</h1>
          <br/>

          <UploadCandidateimage/>

        </Content>
      </Layout>
    </Layout>
  );
}

export default InternetSearchPage;
