import { Form, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import {
  maxValidation,
  minValidation,
  requiredValidation,
} from "../../utils/validator";
import { INumericProps } from "../../types/types";
import InputTitle from "../inputTitle";

function UrlInput({
  name,
  label,
  min = 0,
  max = 200,
  form,
  required,
  pattern = undefined,
  patternErrorMessage = undefined,
  isEditMode = false,
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
          { required: required, message: requiredValidation() },
          { type: "url", message: "url معتبر نمی باشد." },
          { type: "string", min: min, message: minValidation(min) },
          { max: max, message: maxValidation(max) },
        ]}
      >
        <Input
          type="text"
          ref={inputRef}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            !form.getFieldValue(name) && setIsFocus(false);
          }}
        />
      </Form.Item>
    </div>
  );
}

export default UrlInput;
