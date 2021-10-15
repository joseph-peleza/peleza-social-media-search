import React from 'react'
import "antd/dist/antd.css";
import { Form, Upload, Button} from 'antd';
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


const UploadCandidateimage = () => {
    return (
        <div className="App">
            <h1>Please Enter the Image of the Candidate to Search!</h1>

            <Form {...layout} name="control-ref">

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
                        status='done'
                    >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default UploadCandidateimage;
