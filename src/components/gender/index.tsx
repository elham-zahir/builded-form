import { Form, Select } from "antd";
import { useRef, useState } from "react";
import { requiredValidation } from "../../utils/validator";
import { IOptionType, ITextProps } from "../../types/types";
import InputTitle from "../inputTitle";

const genderOptions: IOptionType[] = [
  { value: "male", name: "مذکر" },
  { value: "female", name: "مونث" },
];

function GenderSelection({ name, label, form, required }: ITextProps) {
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
        ]}
      >
        <Select
          ref={inputRef}
          allowClear
          onClick={() => setIsFocus(true)}
          onBlur={() => {
            if (!form.getFieldValue(name)) {
              setIsFocus(false);
            }
          }}
        >
          {genderOptions.map((item: IOptionType, index: number) => {
            return (
              <Select.Option value={item.value} key={index}>
                {item.name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    </div>
  );
}

export default GenderSelection;
