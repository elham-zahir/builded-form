import { Form, Input } from "antd";
import React from "react";
import { requiredValidation } from "../../utils/validator";

interface IProps {
  name: string;
  label: string;
}

function PhoneNumberInput({ name, label }: IProps) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: true,
          message: requiredValidation(),
        },
        {
          pattern: /^09\d{9}$/,
          message:
            "لطفاً یک شماره تلفن معتبر وارد کنید (باید با 09 شروع شود و 10 رقم باشد).",
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
}

export default PhoneNumberInput;
