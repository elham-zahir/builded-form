import PasswordInput from "../passwordInput";
import TextInput from "../textInput";
import { Col, Row } from "antd";
import { ITabProps } from "../../types/types";

function AccountInfoTab({ form }: ITabProps) {
  return (
    <Row gutter={[20, 24]}>
      <Col span={12}>
        <TextInput
          label="نام کاربری"
          name="userName"
          form={form}
          required={true}
        />
      </Col>
      <Col span={12}>
        <PasswordInput
          label="رمز عبور"
          name="password"
          form={form}
          required={true}
        />
      </Col>
      <Col span={12}>
        <PasswordInput
          label="تکرار رمز عبور"
          name="passwordRepeat"
          form={form}
          required={true}
        />
      </Col>
    </Row>
  );
}

export default AccountInfoTab;
