import { Form, Input } from "antd";
import { useRef, useState } from "react";
import { requiredValidation } from "../../utils/validator";
import nationalCodeValidation from "national-code-validation";
import { ITextProps } from "../../types/types";
import InputTitle from "../inputTitle";
import React from "react";

function NationalCodeInput({ name, label, form, required }: ITextProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<any>(null);

  return (
    <div className={"formItemContainer"}>
      <InputTitle
        isFocus={isFocus}
        label={label}
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
            validator(_, value) {
              const validationResult = nationalCodeValidation(value);
              if (validationResult.length) {
                return Promise.reject(new Error(validationResult));
              }
              return Promise.resolve();
            },
          },
        ]}
      >
        <Input
          ref={inputRef}
          type="number"
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

export default NationalCodeInput;
