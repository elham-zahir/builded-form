import { Form, Input } from "antd";
import React from "react";
import { requiredValidation } from "../../utils/validator";
import nationalCodeValidation from "national-code-validation";

interface IProps {
  name: string;
  label: string;
}

function NationalCodeInput({ name, label }: IProps) {
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
          validator(_, value) {
            const validationResult = nationalCodeValidation(value);
            if (validationResult.length) {
              return Promise.reject(new Error(validationResult));
            }
            return Promise.resolve();
          },
        },
      ]}
    >
      <Input type="number" />
    </Form.Item>
  );
}

export default NationalCodeInput;
