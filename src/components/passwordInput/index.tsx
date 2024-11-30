import { Form, Input } from "antd";
import React from "react";
import { minValidation, requiredValidation } from "../../utils/validator";

interface IProps {
  name: string;
  label: string;
  min?: number;
  max?: number;
}

function PasswordInput({ name, label, min = 8 }: IProps) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: true,
          message: requiredValidation(),
        },
        { min: min, message: minValidation(min) },
        {
          pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
          message:
            "پسورد باید حداقل شامل یک حرف انگلیسی، یک عدد و یک کاراکتر خاص باشد.",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
  );
}

export default PasswordInput;
