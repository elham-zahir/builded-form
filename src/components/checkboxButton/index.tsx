import React from "react";
import { IOptionType } from "../../../types/types";
import { Checkbox, Form } from "antd";
import { requiredValidation } from "../../utils/validator";

interface IProps {
  name: string;
  label: string;
  options: IOptionType[];
}

function CheckboxButtons({ name, label, options }: IProps) {
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
      <Checkbox.Group>
        {options.map((item: IOptionType, index: number) => {
          return (
            <Checkbox value={item.value} key={index}>
              {item.name}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </Form.Item>
  );
}

export default CheckboxButtons;
