import { Form, Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { requiredValidation } from "../../utils/validator";
import { ITextProps } from "../../types/types";
import InputTitle from "../inputTitle";
import React from "react";

function EmailInput({
  label,
  name,
  form,
  required,
  pattern = undefined,
  patternErrorMessage = "",
  isEditMode,
  onReset,
}: ITextProps) {
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
          {
            pattern: pattern,
            message: patternErrorMessage,
          },
        ]}
      >
        <Input
          type="text"
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

export default EmailInput;
