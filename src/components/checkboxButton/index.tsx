import { IOptionType, IRadioProps } from "../../types/types";
import { Checkbox, Form } from "antd";
import { requiredValidation } from "../../utils/validator";
import React from "react";

function CheckboxButtons({
  name,
  label,
  options,
  required,
  pattern = undefined,
  patternErrorMessage = "",
}: IRadioProps) {
  return (
    <Form.Item
      label={
        <>
          {label}
          <span className="requirement">{required ? "(اجباری)" : ""}</span>
        </>
      }
      name={name}
      rules={[
        {
          required: required,
          message: requiredValidation(),
        },
        { pattern: pattern, message: patternErrorMessage },
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
