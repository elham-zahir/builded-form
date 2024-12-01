import { Form, Input } from "antd";
import React from "react";
import {
  maxValidation,
  minValidation,
  requiredValidation,
} from "../../utils/validator";

interface IProps {
  name: string;
  label: string;
  min?: number;
  max?: number;
}

function TextInput({ name, label, min = 2, max = 10 }: IProps) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          pattern: /^[A-Za-zآ-ی]+$/,
          message: "لطفاً فقط از حروف الفبا و حروف فارسی استفاده کنید",
        },
        {
          required: true,
          message: requiredValidation(),
        },
        { min: min, message: minValidation(min) },
        { max: max, message: maxValidation(max) },
      ]}
    >
      <Input type="text" />
    </Form.Item>
  );
}

export default TextInput;
