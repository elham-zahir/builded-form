import { Form, Input, Select } from "antd";
import React from "react";
import { requiredValidation } from "../../utils/validator";

interface IProps {
  name: string;
  label: string;
}

const { Option } = Select;

interface IOptionType {
  value: string;
  label: string;
}

const countries: IOptionType[] = [
  {
    label: "US +1",
    value: "+1",
  },
  { label: "RU +7", value: "+7" },
  {
    label: "EG +20",
    value: "+20",
  },
  { label: "ZA +27", value: "+27" },
  { label: "NL +31", value: "+31" },
  { label: "BE +32", value: "+32" },
  { label: "FR +33", value: "+33" },
  { label: "ES +34", value: "+34" },
  { label: "IT +39", value: "+39" },
  { label: "CH +41", value: "+41" },
  { label: "GB +44", value: "+44" },
  { label: "SE +46", value: "+46" },
  { label: "DE +49", value: "+49" },
  { label: "MX +52", value: "+52" },
  { label: "BR +55", value: "+55" },
  { label: "MY +60", value: "+60" },
  { label: "AU +61", value: "+61" },
  { label: "TH +66", value: "+66" },
  { label: "JP +81", value: "+81" },
  { label: "KR +82", value: "+82" },
  { label: "TR +90", value: "+90" },
  { label: "IN +91", value: "+91" },
  { label: "IR +98", value: "+98" },
];

function PhoneNumberInput({ name, label }: IProps) {
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
            {item.label}
          </Option>
        );
      })}
    </Select>
  );

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: true,
          message: requiredValidation(),
        },
        {
          pattern: /^9\d{9}$/,
          message:
            "لطفاً یک شماره تلفن معتبر وارد کنید (باید با 9 شروع شود و 10 رقم باشد).",
        },
      ]}
    >
      <Input addonAfter={selectBefore} />
    </Form.Item>
  );
}

export default PhoneNumberInput;
