import {
  Button,
  Cascader,
  DatePicker,
  Flex,
  Form,
  FormProps,
  Input,
  InputNumber,
  Radio,
  Select,
  Splitter,
  Switch,
  TreeSelect,
} from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { ReactNode, useState } from "react";

const Desc: React.FC<Readonly<{ content: ReactNode }>> = (props) => (
  <Flex style={{ padding: 24 }}>{props.content}</Flex>
);

export default function HomePage() {
  const [formValue, setFormValue] = useState({});
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange: FormProps<any>["onValuesChange"] = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setFormValue(values);
  };

  return (
    <Splitter style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
      <Splitter.Panel defaultSize="60%">
        <Desc
          content={
            <Form
              initialValues={{ size: componentSize }}
              onValuesChange={onFormLayoutChange}
              onFinish={onFinish}
              size={componentSize as SizeType}
              style={{width:'100%'}}
            >
              <Form.Item label="Form Size" name="size">
                <Radio.Group>
                  <Radio.Button value="small">Small</Radio.Button>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Input" name="input">
                <Input />
              </Form.Item>
              <Form.Item label="Select" name="select">
                <Select options={[{ label: "Demo", value: "demo" }]} />
              </Form.Item>
              <Form.Item label="TreeSelect" name="TreeSelect">
                <TreeSelect
                  treeData={[
                    {
                      title: "Light",
                      value: "light",
                      children: [{ title: "Bamboo", value: "bamboo" }],
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Cascader" name="Cascader">
                <Cascader
                  options={[
                    {
                      value: "zhejiang",
                      label: "Zhejiang",
                      children: [{ value: "hangzhou", label: "Hangzhou" }],
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="DatePicker" name="DatePicker">
                <DatePicker />
              </Form.Item>
              <Form.Item label="InputNumber" name="InputNumber">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Switch" valuePropName="checked" name="Switch">
                <Switch />
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
        <Desc
          content={
            <div>
              <p>预览区：</p>
              <pre>{JSON.stringify(formValue || {}, null, 2)}</pre>
            </div>
          }
        />
      </Splitter.Panel>
    </Splitter>
  );
}
