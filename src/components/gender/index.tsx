import { Form, Select } from "antd";
import React from "react";
import { requiredValidation } from "../../utils/validator";

interface IProps {
  name: string;
  label: string;
}

interface IOptionType {
  label: string;
  value: string;
}

const genderOptions: IOptionType[] = [
  { value: "male", label: "مذکر" },
  { value: "female", label: "مونث" },
];

function GenderSelection({ name, label }: IProps) {
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
      <Select allowClear>
        {genderOptions.map((item: IOptionType, index: number) => {
          return (
            <Select.Option value={item.value} key={index}>
              {item.label}
            </Select.Option>
          );
        })}
      </Select>
    </Form.Item>
  );
}

export default GenderSelection;
