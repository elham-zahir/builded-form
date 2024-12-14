import { Form, Input, InputNumber } from "antd";
import { useRef, useState } from "react";
import { requiredValidation } from "../../utils/validator";
import { INumericProps } from "../../types/types";
import InputTitle from "../inputTitle";
import React from "react";
import PlusIcon from "../../icons/PlusIcon";
import MinusIcon from "../../icons/MinusIcon";

function NumberInput({
  name,
  label,
  min = 0,
  max = 99,
  form,
  required,
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
          {
            validator(_, value) {
              if (Number(value) < min) {
                return Promise.reject(
                  new Error(`سن نمی تواند از  ${min} کمتر باشد`)
                );
              }
              if (Number(value) > max) {
                return Promise.reject(
                  new Error(`سن نمی تواند از  ${max} بیشتر باشد`)
                );
              }
              return Promise.resolve();
            },
          },
        ]}
      >
        <InputNumber
          type="number"
          ref={inputRef}
          min={min}
          max={max}
          onClick={() => setIsFocus(true)}
          onBlur={() => {
            if (!form.getFieldValue(name)) {
              setIsFocus(false);
            }
          }}
          onChange={() => setIsFocus(true)}
          controls={{ upIcon: <PlusIcon />, downIcon: <MinusIcon /> }}
        />
      </Form.Item>
    </div>
  );
}

export default NumberInput;
