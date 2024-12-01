import React from "react";
import { Button, Col, ConfigProvider, Form, Input, Row } from "antd";
import styles from "./styles/index.module.scss";
import "./styles/global.scss";
import TextInput from "./components/textInput";
import PasswordInput from "./components/passwordInput";
import EmailInput from "./components/emailInput";
import PhoneNumberInput from "./components/phoneNumberInput";
import NationalCodeInput from "./components/nationalCodeInput";
import AgeInput from "./components/ageInput";
import GenderSelection from "./components/gender";
import TextAreaInput from "./components/textArea";
import ImageUploader from "./components/imageUploader";
import FileUploader from "./components/fileUploader";
import RadioInput from "./components/radioInput";
import CheckboxButtons from "./components/checkboxButton";
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
