import { Form, Input } from "antd";
import React from "react";
import { requiredValidation } from "../../utils/validator";

interface IProps {
  label: string;
  name: string;
  min?: number;
  max?: number;
}

function EmailInput({ label, name }: IProps) {
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
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "لطفاً یک ایمیل معتبر وارد کنید.",
        },
      ]}
    >
      <Input type="text" />
    </Form.Item>
  );
}

export default EmailInput;
