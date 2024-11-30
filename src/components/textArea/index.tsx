import { Form } from "antd";
import React from "react";
import { requiredValidation } from "../../utils/validator";
import TextArea from "antd/es/input/TextArea";

interface IProps {
  name: string;
  label: string;
}

function TextAreaInput({ name, label }: IProps) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: true,
          message: requiredValidation(),
        },
      ]}
    >
      <TextArea rows={8} />
    </Form.Item>
  );
}

export default TextAreaInput;
