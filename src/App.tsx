import React from "react";
import { Button, ConfigProvider, Form, Input } from "antd";
import styles from "./styles/index.module.scss";
import "./styles/global.scss";
import NameInput from "./components/nameInput";
import PasswordInput from "./components/passwordInput";
import EmailInput from "./components/emailInput";
import PhoneNumberInput from "./components/phoneNumberInput";
import nationalCodeValidation from "national-code-validation";
import NationalCodeInput from "./components/nationalCodeInput";

function App() {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Form values:", values);
  };

  const handleError = (values: any) => {
    console.log({ values });
  };

  return (
    <ConfigProvider>
      <Form
        name="userData"
        form={form}
        className={styles.container}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={handleError}
        autoComplete="off"
        layout="vertical"
      >
        <NameInput label="نام" name="firstName" />
        <NameInput label="نام خانوادگی" name="lastName" />

        <PasswordInput label="رمز عبور" name="password" />
        <PasswordInput label="تکرار رمز عبور" name="passwordRepeat" />

        <EmailInput label="ایمیل" name="email" />

        <PhoneNumberInput label="شماره تلفن" name="phoneNumber" />

        <NationalCodeInput name="nationalCode" label="کد ملی" />

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
}

export default App;
