import { Form, FormInstance, Input } from "antd";
import React, { useState } from "react";
import { minValidation, requiredValidation } from "../../utils/validator";

interface IProps {
  name: string;
  label: string;
  min?: number;
  max?: number;
  form: FormInstance;
}

function PasswordInput({ name, label, min = 8, form }: IProps) {
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
          { min: min, message: minValidation(min) },
          {
            pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
            message:
              "پسورد باید حداقل شامل یک حرف انگلیسی، یک عدد و یک کاراکتر خاص باشد.",
          },
        ]}
      >
        <Input.Password
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

export default PasswordInput;
