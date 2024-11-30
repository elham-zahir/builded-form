import { Form, Input } from "antd";
import React from "react";
import { requiredValidation } from "../../utils/validator";

interface IProps {
  name: string;
  label: string;
  min?: number;
  max?: number;
}

function AgeInput({ name, label, min = 0, max = 99 }: IProps) {
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
            console.log({ value });
            if (Number(value) < min) {
              return Promise.reject(
                new Error(`سن نمی تواند از  ${min} کمتر باشد`)
              );
            }
            if (Number(value) > max) {
              return Promise.reject(
                new Error(`سن نمی تواند از  ${max} بیشتر باشد`)
              );
            }
            return Promise.resolve();
          },
        },
      ]}
    >
      <Input type="number" min={min} max={max} />
    </Form.Item>
  );
}

export default AgeInput;
