import { Form, FormInstance, Input, Select } from "antd";
import React, { useState } from "react";
import { requiredValidation } from "../../utils/validator";
import { IOptionType, ITextProps } from "../../types/types";

const { Option } = Select;

const countries: IOptionType[] = [
  {
    name: "US +1",
    value: "+1",
  },
  { name: "RU +7", value: "+7" },
  {
    name: "EG +20",
    value: "+20",
  },
  { name: "ZA +27", value: "+27" },
  { name: "NL +31", value: "+31" },
  { name: "BE +32", value: "+32" },
  { name: "FR +33", value: "+33" },
  { name: "ES +34", value: "+34" },
  { name: "IT +39", value: "+39" },
  { name: "CH +41", value: "+41" },
  { name: "GB +44", value: "+44" },
  { name: "SE +46", value: "+46" },
  { name: "DE +49", value: "+49" },
  { name: "MX +52", value: "+52" },
  { name: "BR +55", value: "+55" },
  { name: "MY +60", value: "+60" },
  { name: "AU +61", value: "+61" },
  { name: "TH +66", value: "+66" },
  { name: "JP +81", value: "+81" },
  { name: "KR +82", value: "+82" },
  { name: "TR +90", value: "+90" },
  { name: "IN +91", value: "+91" },
  { name: "IR +98", value: "+98" },
];

function PhoneNumberInput({ name, label, form, required }: ITextProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onSearch = (value: string) => {};

  const selectBefore = (
    <Select
      showSearch
      defaultValue="+98"
      style={{ width: 60 }}
      onSearch={onSearch}
      allowClear
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
            pattern: /^9\d{9}$/,
            message:
              "لطفاً یک شماره تلفن معتبر وارد کنید (باید با 9 شروع شود و 10 رقم باشد).",
          },
        ]}
      >
        <Input
          type="number"
          addonAfter={selectBefore}
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

export default PhoneNumberInput;
