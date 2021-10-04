import React from 'react';
import { Form, Input, Button, Select } from 'antd';
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
      switch (value) {
        case 'male':
          return;
  
        case 'female':
          return;
  
        case 'other':
      }
    };
    const onFinish = (values) => {
      console.log(values);
    };

    return (
        <Form {...layout} name="control-ref" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Name"
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
            label="Site"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              onChange={onSiteChange}
              allowClear
            >
              <Option value="male">Facebook</Option>
              <Option value="female">Instagram</Option>
              <Option value="other">LinkedIn</Option>
            </Select>
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
              Submit
            </Button>
            {/* <Button htmlType="button" onClick={onReset}>
              Reset
            </Button> */}
            {/* <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button> */}
          </Form.Item>
        </Form>
      );
}

export default UserDetailsForm;