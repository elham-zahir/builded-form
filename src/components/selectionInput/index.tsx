import { Form, Select } from "antd";
import { useEffect, useRef, useState } from "react";
import { requiredValidation } from "../../utils/validator";
import { IOptionType, ISelectProps } from "../../types/types";
import InputTitle from "../inputTitle";
import React from "react";
import DownIcon from "../../icons/DownIcon";
import CloseIcon from "../../icons/CloseIcon";

function SelectionInput({
  name,
  label,
  form,
  required,
  options,
  pattern = undefined,
  pattenErrorMessage = "",
  isEditMode,
}: ISelectProps) {
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
            required: required,
            message: requiredValidation(),
          },
          { pattern: pattern, message: pattenErrorMessage },
        ]}
      >
        <Select
          ref={inputRef}
          onClick={() => setIsFocus(true)}
          onBlur={() => {
            if (!form.getFieldValue(name)) {
              setIsFocus(false);
            }
          }}
          suffixIcon={<DownIcon />}
          allowClear={{ clearIcon: <CloseIcon /> }}
        >
          {options.map((item: IOptionType, index: number) => {
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

export default SelectionInput;
