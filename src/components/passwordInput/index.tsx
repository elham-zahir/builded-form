import { Form, Input } from "antd";
import { useEffect, useRef, useState } from "react";
import {
  maxValidation,
  minValidation,
  requiredValidation,
} from "../../utils/validator";
import { INumericProps } from "../../types/types";
import InputTitle from "../inputTitle";
import React from "react";

function PasswordInput({
  name,
  label,
  min = 8,
  max = 16,
  form,
  required,
  pattern = undefined,
  patternErrorMessage,
  isEditMode,
  onReset,
}: INumericProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    form.getFieldValue(name) ? setIsFocus(true) : setIsFocus(false);
  }, [isEditMode, onReset]);

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
          { max: max, message: maxValidation(max) },
          {
            pattern: pattern,
            message: patternErrorMessage || "مقدار ورودی معتبر نمی باشد.",
          },
        ]}
      >
        <Input.Password
          ref={inputRef}
          onFocus={() => setIsFocus(true)}
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
