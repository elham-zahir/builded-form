import React from "react";
import { requiredValidation } from "../../utils/validator";
import { Form, Radio } from "antd";
import { IOptionType, IRadioProps } from "../../types/types";

function RadioInput({
  name,
  label,
  options,
  required,
  pattern = undefined,
  pattenErrorMessage = "",
}: IRadioProps) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: requiredValidation(),
        },
        { pattern: pattern, message: pattenErrorMessage },
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
