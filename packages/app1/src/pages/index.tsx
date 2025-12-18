import {
  Button,
  Flex,
  Form,
  Input,
  Select,
  Splitter,
} from "antd";
import { ReactNode, useState } from "react";

const Desc: React.FC<Readonly<{ content: ReactNode}>> = (props) => (
  <Flex style={{ padding: 24 }}>
    {props.content}
  </Flex>
);

export default function HomePage() {
  const [formValue, setFormValue] = useState({});

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setFormValue(values);
  };

  return (
    <Splitter style={{ height: 200, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
      <Splitter.Panel defaultSize="60%">
        <Desc
          content={
            <Form onFinish={onFinish}>
              <Form.Item label="Name" name="name">
                <Input />
              </Form.Item>
              <Form.Item label="Category" name="category">
                <Select>
                  <Select.Option value="cat1">Category 1</Select.Option>
                  <Select.Option value="cat2">Category 2</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          }
        />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc content={
          <div>
            <p>预览区：</p>
            <pre>
              {
                JSON.stringify(formValue || {}, null, 2)
              }
            </pre>
          </div>
        } />
      </Splitter.Panel>
    </Splitter>
  );
}
