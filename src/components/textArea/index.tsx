import { Form } from "antd";
import { useRef, useState } from "react";
import { requiredValidation } from "../../utils/validator";
import TextArea from "antd/es/input/TextArea";
import { ITextAreaProps } from "../../types/types";
import InputTitle from "../inputTitle";

function TextAreaInput({
  name,
  label,
  form,
  required,
  max = 100,
  pattern = undefined,
  pattenErrorMessage = "",
}: ITextAreaProps) {
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
          { pattern: pattern, message: pattenErrorMessage },
        ]}
      >
        <TextArea
          maxLength={max}
          showCount
          rows={8}
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

export default TextAreaInput;
