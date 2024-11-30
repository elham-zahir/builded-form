import { Form, Select } from "antd";
import React from "react";
import { requiredValidation } from "../../utils/validator";

interface IProps {
  name: string;
  label: string;
}

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
      {" "}
      <Select
        options={[
          { value: "male", label: <span>مذکر</span> },
          { value: "female", label: <span>مونث</span> },
        ]}
      />
    </Form.Item>
  );
}

export default GenderSelection;
