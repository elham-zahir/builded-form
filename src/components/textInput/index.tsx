import { Form, FormInstance, Input } from "antd";
import React, { useState } from "react";
import {
  maxValidation,
  minValidation,
  requiredValidation,
} from "../../utils/validator";

interface IProps {
  name: string;
  label: string;
  min?: number;
  max?: number;
  form: FormInstance;
}

function TextInput({ name, label, min = 2, max = 10, form }: IProps) {
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
            pattern: /^[A-Za-zآ-ی]+$/,
            message: "لطفاً فقط از حروف الفبا و حروف فارسی استفاده کنید",
          },
          {
            required: true,
            message: requiredValidation(),
          },
          { min: min, message: minValidation(min) },
          { max: max, message: maxValidation(max) },
        ]}
      >
        <Input
          type="text"
          onClick={() => setIsFocus(true)}
          onBlur={() => {
            if (!form.getFieldValue(name)) {
              setIsFocus(false);
            }
          }}
        />
      </Form.Item>
    </div>
  );
}

export default TextInput;
