import React from "react";
import { requiredValidation } from "../../utils/validator";
import { Form, Radio } from "antd";

interface IOptionType {
  name: string;
  value: string;
}

interface IProps {
  name: string;
  label: string;
  options: IOptionType[];
}

function RadioInput({ name, label, options }: IProps) {
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
      <Radio.Group>
        {options.map((item: IOptionType, index: number) => {
          return (
            <Radio value={item.value} key={index}>
              {item.name}
            </Radio>
          );
        })}
      </Radio.Group>
    </Form.Item>
  );
}

export default RadioInput;
