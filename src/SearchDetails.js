import React from 'react'
import { DatePicker} from "antd";
import "antd/dist/antd.css";
import "./App.css";
import { Upload, Button, message, Alert } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import UserDetailsForm from './UserDetailsForm';


const fileList = [
    {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    // {
    //     uid: '-2',
    //     name: 'yyy.png',
    //     status: 'error',
    // },
];


const SearchDetails = () => {
    return (
        <div className="App">
            <h1>Please Enter the Name of the Candidate to Search!</h1>
            <br/>
          <UserDetailsForm/>
            {/* <Button type="primary" style={{ marginLeft: 8 }}>
                Confirm Name
            </Button> */}
            <Alert message="Search Results" />
            <br/>
            <h1>Please Upload a Known Image of the Candidate to Search!</h1>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                defaultFileList={[...fileList]}
            >
                <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            <br />
            <br />
            {/* <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                defaultFileList={[...fileList]}
                className="upload-list-inline"
            >
                <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload> */}
        </div>
    )
}

export default SearchDetails
