import { useState } from 'react';
import { Button, DatePicker, version, message, Alert } from 'antd';
import 'antd/dist/antd.css'; 

function App() {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    message.info()
    setDate(value);
  }
  return (
    <div style={{width: 400, margin: '100px auto'}}>
      <h1>Ant Design Version: {version} </h1>
      <DatePicker onChange={handleChange} />
      <Button type = "primary" style= {{marginLeft: 8}}>Does Nothing</Button>
      <div>
        {/* Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'} */}
        <Alert message="Selected Date " description={date ? date.format('YYYY-MM-DD') : 'None'} />
      </div>
    </div>
  );
}

export default App;
