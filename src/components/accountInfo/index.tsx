import React from "react";
import PasswordInput from "../passwordInput";
import TextInput from "../textInput";
import { Col, FormInstance, Row } from "antd";

interface IProps {
  form: FormInstance;
}

function AccountInfoTab({ form }: IProps) {
  return (
    <Row gutter={[20, 24]}>
      <Col span={12}>
        <TextInput label="نام کاربری" name="userName" form={form} />
      </Col>
      <Col span={12}>
        <PasswordInput label="رمز عبور" name="password" form={form} />
      </Col>
      <Col span={12}>
        <PasswordInput
          label="تکرار رمز عبور"
          name="passwordRepeat"
          form={form}
        />
      </Col>
    </Row>
  );
}

export default AccountInfoTab;
