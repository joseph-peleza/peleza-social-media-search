import React from 'react';
import { Form, Input, Select, Upload, Button} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

// const fileList = [
//   {
//       uid: '-1',
//       name: 'xxx.png',
//       status: 'done',
//       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//       thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//   },
//   // {
//   //     uid: '-2',
//   //     name: 'yyy.png',
//   //     status: 'error',
//   // },
// ];
const { Option } = Select;
const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 16,
  },
};

const UserDetailsForm = () => {
    const onSiteChange = (value) => {
      // eslint-disable-next-line
      switch (value) {
        case 'facebook':
          return;
  
        case 'instagram':
          return;

        case 'linkedin':
          return;
  
        case 'tiktok':
          return;

        case 'twitter':
          return;
  
        case 'other':
      }
    };
    const onFinish = (values) => {
      console.log(values);
    };

    return (
      <>
        <Form {...layout} name="control-ref" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Name of Candidate:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="site"
            label="Social Media Site to Search:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a social media site to find a candidate's profile..."
              onChange={onSiteChange}
              allowClear
            >
              <Option value="facebook">Facebook</Option>
              <Option value="instagram">Instagram</Option>
              <Option value="linkedin">LinkedIn</Option>
              <Option value="tiktok">TikTok</Option>
              <Option value="twitter">Twitter</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="photo"
            label="Please Provide a Candidate Image:"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                // defaultFileList={[...fileList]}
                status = 'done'
            >
                <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.site !== currentValues.site}
          >
            {({ getFieldValue }) =>
              getFieldValue('site') === 'other' ? (
                <Form.Item
                  name="customizeSite"
                  label="Customize Site"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
      </>
      );
}

export default UserDetailsForm;