import { Form, InputNumber, Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { requiredValidation } from "../../utils/validator";
import { IOptionType, ITextProps } from "../../types/types";
import InputTitle from "../inputTitle";
import DownIcon from "../../icons/DownIcon";
import { countries } from "../../types/telCodeOptions";

const { Option } = Select;

function PhoneNumberInput({
  name,
  label,
  form,
  required,
  pattern = undefined,
  patternErrorMessage,
  isEditMode,
  onReset,
}: ITextProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    form.getFieldValue(name) ? setIsFocus(true) : setIsFocus(false);
  }, [isEditMode, onReset]);

  const onSearch = (value: string) => {};

  const selectBefore = (
    <Select
      showSearch
      defaultValue="+98"
      style={{ width: 60 }}
      onSearch={onSearch}
      suffixIcon={<DownIcon />}
      // allowClear={{ clearIcon: <CloseIcon /> }}
    >
      {countries.map((item: IOptionType, index: number) => {
        return (
          <Option value={item.value} key={index}>
            {item.name}
          </Option>
        );
      })}
    </Select>
  );

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
            message: patternErrorMessage || "مقدار ورودی معتبر نمی باشد.",
          },
        ]}
      >
        <InputNumber
          ref={inputRef}
          type="number"
          className="phoneNumber"
          addonAfter={selectBefore}
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

export default PhoneNumberInput;
