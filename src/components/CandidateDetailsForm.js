import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { useNavigate } from 'react-router';


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



function CandidateDetailsForm(){
  const navigate = useNavigate();
  const handleOpenResults = () => navigate('/social-media-search-results');

  const onSiteChange = (value) => {
    // eslint-disable-next-line
    switch (value) {
      case 'allsites':
        return;
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
            <Option value="allsites">All Social Media sites</Option>
            <Option value="facebook">Facebook</Option>
            <Option value="instagram">Instagram</Option>
            <Option value="linkedin">LinkedIn</Option>
            <Option value="tiktok">TikTok</Option>
            <Option value="twitter">Twitter</Option>
            <Option value="other">Other</Option>
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
          <Button type="primary" htmlType="submit" onClick={handleOpenResults}>
            Search
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CandidateDetailsForm;