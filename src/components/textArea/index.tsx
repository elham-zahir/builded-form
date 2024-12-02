import { Form } from "antd";
import React from "react";
import { requiredValidation } from "../../utils/validator";
import TextArea from "antd/es/input/TextArea";
import { ITextProps } from "../../types/types";

function TextAreaInput({ name, label, form, required }: ITextProps) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: requiredValidation(),
        },
      ]}
    >
      <TextArea rows={8} />
    </Form.Item>
  );
}

export default TextAreaInput;
