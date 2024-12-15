import { Form, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import {
  maxValidation,
  minValidation,
  requiredValidation,
} from "../../utils/validator";
import { INumericProps } from "../../types/types";
import InputTitle from "../inputTitle";

function TextInput({
  name,
  label,
  min = 2,
  max = 100,
  form,
  required,
  pattern = undefined,
  pattenErrorMessage = "",
  isEditMode = false,
}: INumericProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    form.getFieldValue(name) ? setIsFocus(true) : setIsFocus(false);
  }, [isEditMode]);

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
            pattern: pattern,
            message: pattenErrorMessage,
          },
          {
            required: required,
            message: requiredValidation(),
          },
          { min: min, message: minValidation(min) },
          { max: max, message: maxValidation(max) },
        ]}
      >
        <Input
          type="text"
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

export default TextInput;
