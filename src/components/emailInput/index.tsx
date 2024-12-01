import { Form, FormInstance, Input } from "antd";
import React, { useState } from "react";
import { requiredValidation } from "../../utils/validator";

interface IProps {
  label: string;
  name: string;
  min?: number;
  max?: number;
  form: FormInstance;
}

function EmailInput({ label, name, form }: IProps) {
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
          {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "لطفاً یک ایمیل معتبر وارد کنید.",
          },
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

export default EmailInput;
