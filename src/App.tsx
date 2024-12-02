import React from "react";
import { ConfigProvider, Form } from "antd";
import styles from "./styles/index.module.scss";
import "./styles/global.scss";
import TabsContainer from "./components/tabs";

function App() {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Form values:", values);
  };

  const handleError = (values: any) => {
    console.log({ values });
  };

  return (
    <ConfigProvider
    // theme={{
    //   token: {
    //     colorPrimary: "#4daa9f",
    //   },
    // }}
    >
      <Form
        name="userData"
        form={form}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={handleError}
        autoComplete="off"
        layout="vertical"
        className={styles.container}
      >
        <div className={styles.tabs}>
          <TabsContainer form={form} />
        </div>
      </Form>
    </ConfigProvider>
  );
}

export default App;
