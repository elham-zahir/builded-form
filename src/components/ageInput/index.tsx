import { Form, FormInstance, Input } from "antd";
import React, { useState } from "react";
import { requiredValidation } from "../../utils/validator";

interface IProps {
  name: string;
  label: string;
  min?: number;
  max?: number;
  form: FormInstance;
}

function AgeInput({ name, label, min = 0, max = 99, form }: IProps) {
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
        <Input
          type="number"
          min={min}
          max={max}
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

export default AgeInput;
