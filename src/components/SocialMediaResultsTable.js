import React from 'react'

import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'User Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Total Searches',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Link',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Social Media Site',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'facebook') {
            color = 'blue';
          }
          if (tag === 'instagram') {
            color = 'volcano';
          }
          if (tag === 'linkedIn') {
            color = 'cyan';
          }
          if (tag === 'twitter') {
            color = 'orange';
          }
          if (tag === 'tiktok') {
            color = 'green';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a style={{color: "green"}}>View {record.tags}</a>
        <a style={{color: "brown"}}>View All Results</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Joseph Mbuku',
    age: 32,
    address: 'instagram.com/joseph-mbuku',
    tags: ['instagram'],
  },
  {
    key: '2',
    name: 'Joseph Mbuku',
    age: 42,
    address: 'facebook.com/joseph-mbuku',
    tags: ['facebook'],
  },
  {
    key: '3',
    name: 'Joseph Mbuku',
    age: 30,
    address: 'linkedIn.com/joseph-mbuku',
    tags: ['linkedIn'],
  },
  {
    key: '3',
    name: 'Joseph Mbuku',
    age: 30,
    address: 'twitter.com/joseph-mbuku',
    tags: ['twitter'],
  },  {
    key: '3',
    name: 'Joseph Mbuku',
    age: 30,
    address: 'tiktok.com/joseph-mbuku',
    tags: ['tiktok'],
  },
];

const SocialMediaResultsTable = () => {
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default SocialMediaResultsTable
