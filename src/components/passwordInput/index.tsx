import { Form, Input } from "antd";
import { useRef, useState } from "react";
import { minValidation, requiredValidation } from "../../utils/validator";
import { INumericProps } from "../../types/types";
import InputTitle from "../inputTitle";
import React from "react";

function PasswordInput({
  name,
  label,
  min = 8,
  form,
  required,
  pattern = undefined,
  pattenErrorMessage = "",
}: INumericProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<any>(null);

  return (
    <div className={"formItemContainer"}>
      <InputTitle
        isFocus={isFocus}
        label={label}
        required={required}
        onClick={() => {
          if (!form.getFieldValue(name) && inputRef.current) {
            inputRef.current.focus();
            setIsFocus(true);
          }
        }}
      />
      <Form.Item
        name={name}
        rules={[
          {
            required: required,
            message: requiredValidation(),
          },
          { min: min, message: minValidation(min) },
          {
            pattern: pattern,
            message: pattenErrorMessage,
          },
        ]}
      >
        <Input.Password
          ref={inputRef}
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
