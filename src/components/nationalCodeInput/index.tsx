import { Form, Input } from "antd";
import { useState } from "react";
import { requiredValidation } from "../../utils/validator";
import nationalCodeValidation from "national-code-validation";
import { ITextProps } from "../../types/types";

function NationalCodeInput({ name, label, form, required }: ITextProps) {
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
