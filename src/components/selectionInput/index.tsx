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
  patternErrorMessage = "",
  isEditMode,
  onReset,
}: ISelectProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    // form.getFieldValue(name) ? setIsFocus(true) : setIsFocus(false);
    setIsFocus(false);
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
            setOpen(true);
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
          // { pattern: pattern, message: patternErrorMessage },
        ]}
      >
        <Select
          ref={inputRef}
          open={open}
          onClick={() => {
            open ? setOpen(false) : setOpen(true);
            !isFocus && setIsFocus(true);
          }}
          // onFocus={() => {
          //   setIsFocus(true);
          //   setOpen(true);
          // }}
          onBlur={() => {
            if (!form.getFieldValue(name)) setIsFocus(false);
            setOpen(false);
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
