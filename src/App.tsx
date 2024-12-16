import React from "react";
import { ConfigProvider, Form, message } from "antd";
import styles from "./styles/index.module.scss";
import "./styles/global.scss";
import TabsContainer from "./components/tabs";
import { formCategories } from "./types/initials";

function App() {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log({ values });
  };

  const handleError = (values: any) => {
    message.error("ثبت با خطا مواجه شد.");
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4daa9f",
        },
      }}
    >
      {/* <div className={styles.container}> */}
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
          <TabsContainer form={form} formCategories={formCategories} />
        </div>
      </Form>
    </ConfigProvider>
  );
}

export default App;
