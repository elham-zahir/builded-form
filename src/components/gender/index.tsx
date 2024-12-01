import { Form, FormInstance, Select } from "antd";
import React, { useState } from "react";
import { requiredValidation } from "../../utils/validator";

interface IProps {
  name: string;
  label: string;
  form: FormInstance;
}

interface IOptionType {
  label: string;
  value: string;
}

const genderOptions: IOptionType[] = [
  { value: "male", label: "مذکر" },
  { value: "female", label: "مونث" },
];

function GenderSelection({ name, label, form }: IProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <div className={"formItemContainer"}>
      <p
        className={"label"}
        style={{
          top: isFocus ? "-11px" : "17px",
          color: isFocus ? "#4daa9f" : "#969696",
          fontWeight: isFocus ? 600 : 400,
        }}
      >
        {label}
      </p>
      <Form.Item
        name={name}
        rules={[
          {
            required: true,
            message: requiredValidation(),
          },
        ]}
      >
        <Select
          allowClear
          onClick={() => setIsFocus(true)}
          onBlur={() => {
            if (!form.getFieldValue(name)) {
              setIsFocus(false);
            }
          }}
        >
          {genderOptions.map((item: IOptionType, index: number) => {
            return (
              <Select.Option value={item.value} key={index}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    </div>
  );
}

export default GenderSelection;
